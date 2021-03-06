/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.nodyn.tty;

import io.netty.channel.Channel;
import io.netty.channel.ChannelFuture;
import io.netty.channel.EventLoopGroup;
import io.nodyn.netty.pipe.NioInputStreamChannel;
import io.nodyn.NodeProcess;
import io.nodyn.stream.StreamWrap;
import io.nodyn.netty.DataEventHandler;

import java.io.IOException;
import java.io.InputStream;

/**
 * @author Bob McWhirter
 */
public class ReadStream {

    public static ChannelFuture create(NodeProcess process, int fd, StreamWrap handle) throws IOException {
        if (fd == 0) {
            InputStream in = System.in;
            EventLoopGroup eventLoopGroup = process.getEventLoop().getEventLoopGroup();

            Channel channel = NioInputStreamChannel.create(process, in);
            channel.config().setAutoRead(false);
            channel.pipeline().addLast( new DataEventHandler( process, handle ) );
            eventLoopGroup.register(channel);

            return channel.newSucceededFuture();
        }

        return null;
    }
}
