var helper = require('./specHelper');

/*
var  Stream = require('stream'),
    EE = require('events').EventEmitter,
    javaProcess = new io.nodyn.process.Process();

describe('process', function() {

  describe('.stdout', function() {
    it('should be a Stream.Writable', function() {
      expect(process.stdout instanceof Stream.Writable).toBeTruthy();
    });

    it('should have a write function', function() {
      expect(typeof process.stdout.write).toBe('function');
      process.stdout.write("A message to stdout");
    });
  });

  it('should pass testProcessObject', function() {
    expect(process).not.toBe(null);
    expect(typeof process).toBe('object');
  });

  it('should pass testStdErr', function() {
    expect(typeof process.stderr).toBe('object');
    expect(typeof process.stderr.write).toBe('function');
    process.stderr.write("A message to stderr");
  });

  xit('should pass testStdIn', function() {
    // If you access process.stdin, you have to deal with
    // it in its entirety, somehow. A bug in our code,
    // I'm certain.
    expect(typeof process.stdin).toBe('object');
  });

  it('should pass testVersion', function() {
    expect(process.version).toBe(io.nodyn.Nodyn.VERSION);
    expect(process.versions).not.toBeNull();
    expect(process.versions.node).toBe(io.nodyn.Nodyn.VERSION);
    expect(process.versions.java).toBe(java.lang.System.getProperty("java.version"));
    expect(process.versions.dynjs).not.toBeNull();
  });

  it('should pass testExecPath', function() {
    expect(process.execPath).toBe(java.lang.System.getProperty('user.dir'));
  });

  it('should pass testArch', function() {
    expect(process.arch).toBe(javaProcess.arch());
  });

  it('should pass testPlatform', function() {
    expect(process.platform).toBe(javaProcess.platform());
  });

  it('should pass testProcessEvents', function() {
    expect(typeof process.addListener).toBe('function');
  });

  it('should pass testProcessEnv', function() {
    expect(typeof process.env).toBe('object');
    // Make sure we have a tmp dir property
    tmpDir = java.lang.System.getProperty("java.io.tmpdir");
    expect(process.env.TMPDIR).toBe(tmpDir);
    expect(process.env.TEMP).toBe(tmpDir);
    expect(process.env.TMP).toBe(tmpDir);
  });

  it('should pass testCWD', function() {
    expect(process.cwd()).toBe(java.lang.System.getProperty('user.dir'));
  });

  it('should pass testPID', function() {
    expect(process.pid).toBe(java.lang.management.ManagementFactory.getRuntimeMXBean().getName());
  });

  it('should pass testTitle', function() {
    expect(process.title).toBe('Nodyn');
  });

  it('should pass testGlobalness', function() {
    expect(function() { return process; }()).toBe(process);
  });

  it('should pass testProcessConfig', function() {
    // somewhat pointless
    // In node.js process.config returns the compile-time options of node.js
    expect(process.config).not.toBeNull();
  });

  it('should pass testProcessEventListeners', function() {
    // make sure process.on and process.addListener are aliased
    expect(process.on).toBe(process.addListener);
    var functionCalled = false;

    // set an event listener on 'foo'
    process.on('foo', function() { functionCalled = true; });
    expect(process.listeners('foo').length).toBe(1);
    process.emit('foo');
    expect(functionCalled).toBe(true);

    // reset our listeners
    process.removeAllListeners('foo');
    expect(process.listeners('foo').length).toBe(0);

    process.once('foo', function(str) { functionCalled = str; });
    process.emit('foo', 'bar');
    expect(functionCalled).toBe('bar');

    // This event should not be fired
    process.emit('foo', 'foobar');
    expect(functionCalled).toBe('bar');
  });

  it('should pass testNextTick', function() {
    var x = 0;
    var f = function(y) { x += y; };
    process.nextTick(f, 10);
    setTimeout(function() {
      expect(x).toBe(10);
    }, 100);
  });

  it('should pass testMemoryUsage', function() {
    expect(typeof process.memoryUsage).toBe('function');
    memory = process.memoryUsage();
    expect(memory.heapTotal > memory.heapUsed).toBe(true);
  });

  it('should pass testUndocumentedProperties', function() {
    expect(process.noDeprecation).toBe(false);
    expect(process.traceDeprecation).toBe(false);
  });

  describe('zlib binding', function() {
    it('should have an enumeration of zlib modes', function() {
      var binding = process.binding('zlib');
      var values = io.nodyn.zlib.Mode.values();
      for(var i=0; i<values.length; i++) {
        expect(binding[values[i]]).toBe(values[i].ordinal());
      }
    });

    it('should have an enumeration of zlib codes', function() {
      var binding = process.binding('zlib');
      var values = io.nodyn.zlib.Code.values();
      for(var i=0; i<values.length; i++) {
        expect(binding[values[i]]).toBe(values[i].ordinal());
      }
    });

    it('should have an enumeration of zlib strategies', function() {
      var binding = process.binding('zlib');
      var values = io.nodyn.zlib.Strategy.values();
      for(var i=0; i<values.length; i++) {
        expect(binding[values[i]]).toBe(values[i].ordinal());
      }
    });

    it('should have an enumeration of zlib flush options', function() {
      var binding = process.binding('zlib');
      var values = io.nodyn.zlib.Flush.values();
      for(var i=0; i<values.length; i++) {
        expect(binding[values[i]]).toBe(values[i].ordinal());
      }
    });

    it('should take a mode in its constructor function', function() {
      var binding = process.binding('zlib');
      var sut = new binding.Zlib(binding.DEFLATE);
      expect(sut).toBeTruthy();
    });

    it('should be an EventEmitter', function() {
      var binding = process.binding('zlib');
      var sut = new binding.Zlib(binding.DEFLATE);
      expect(sut instanceof EE).toBeTruthy();
    });

  });
});
*/
