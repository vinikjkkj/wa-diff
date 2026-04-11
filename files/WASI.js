__d(
  "WASI",
  [
    "WACryptoDependencies",
    "WASIContext",
    "WASIDrive",
    "WASISnapshotPreview1",
    "WASMMemoryLogger",
    "WATextEncoding",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t,
        n = new (o("WASIContext").WASIContext)(e),
        a = new (o("WASIDrive").WASIDrive)(n.fs);
      function i() {
        return Object.entries(n.env).map(function (e) {
          var t = e[0],
            n = e[1];
          return t + "=" + n;
        });
      }
      var l = {
        args_get: function (r, a) {
          var e = r,
            i = a,
            l = new DataView(t.buffer);
          for (var s of n.args) {
            (l.setUint32(e, i, !0), (e += 4));
            var u = o("WATextEncoding")
                .newTextEncoder()
                .encode(s + "\0"),
              c = new Uint8Array(t.buffer, i, u.byteLength);
            (c.set(u), (i += u.byteLength));
          }
          return o("WASISnapshotPreview1").RESULT.SUCCESS;
        },
        args_sizes_get: function (r, a) {
          var e = n.args,
            i = e.reduce(function (e, t) {
              return (
                e +
                o("WATextEncoding")
                  .newTextEncoder()
                  .encode(t + "\0").byteLength
              );
            }, 0),
            l = new DataView(t.buffer);
          return (
            l.setUint32(r, e.length, !0),
            l.setUint32(a, i, !0),
            o("WASISnapshotPreview1").RESULT.SUCCESS
          );
        },
        clock_res_get: function () {
          throw r("err")("clock_res_get is not implemented");
        },
        clock_time_get: function (n, r, a) {
          var e = o("WASISnapshotPreview1").Clock.cast(n);
          if (e == null) return o("WASISnapshotPreview1").RESULT.EINVAL;
          switch (e) {
            case o("WASISnapshotPreview1").Clock.REALTIME:
            case o("WASISnapshotPreview1").Clock.MONOTONIC:
            case o("WASISnapshotPreview1").Clock.PROCESS_CPUTIME_ID:
            case o("WASISnapshotPreview1").Clock.THREAD_CPUTIME_ID: {
              var i = new DataView(t.buffer);
              return (
                i.setBigUint64(a, f(new Date()), !0),
                o("WASISnapshotPreview1").RESULT.SUCCESS
              );
            }
          }
        },
        environ_get: function (n, r) {
          var e = n,
            a = r,
            l = new DataView(t.buffer);
          for (var s of i()) {
            (l.setUint32(e, a, !0), (e += 4));
            var u = o("WATextEncoding")
                .newTextEncoder()
                .encode(s + "\0"),
              c = new Uint8Array(t.buffer, a, u.byteLength);
            (c.set(u), (a += u.byteLength));
          }
          return o("WASISnapshotPreview1").RESULT.SUCCESS;
        },
        environ_sizes_get: function (n, r) {
          var e = i().reduce(function (e, t) {
              return (
                e +
                o("WATextEncoding")
                  .newTextEncoder()
                  .encode(t + "\0").byteLength
              );
            }, 0),
            a = new DataView(t.buffer);
          return (
            a.setUint32(n, i().length, !0),
            a.setUint32(r, e, !0),
            o("WASISnapshotPreview1").RESULT.SUCCESS
          );
        },
        fd_advise: function () {
          throw r("err")("fd_advise is not implemented");
        },
        fd_allocate: function () {
          throw r("err")("fd_allocate is not implemented");
        },
        fd_close: function (t) {
          return a.close(t);
        },
        fd_datasync: function () {
          throw r("err")("fd_datasync is not implemented");
        },
        fd_fdstat_get: function (r, i) {
          if (r < 3) {
            var e;
            if (n.isTTY) {
              var l =
                c ^
                o("WASISnapshotPreview1").RightsFlags.FD_SEEK ^
                o("WASISnapshotPreview1").RightsFlags.FD_TELL;
              e = p(o("WASISnapshotPreview1").FileType.CHARACTER_DEVICE, 0, l);
            } else
              e = p(o("WASISnapshotPreview1").FileType.CHARACTER_DEVICE, 0);
            var s = new Uint8Array(t.buffer, i, e.byteLength);
            return (s.set(e), o("WASISnapshotPreview1").RESULT.SUCCESS);
          }
          if (!a.exists(r)) return o("WASISnapshotPreview1").RESULT.EBADF;
          var u = a.fileType(r),
            d = a.fileFdflags(r),
            m = p(u, d),
            _ = new Uint8Array(t.buffer, i, m.byteLength);
          return (_.set(m), o("WASISnapshotPreview1").RESULT.SUCCESS);
        },
        fd_fdstat_set_flags: function (t, n) {
          return a.setFlags(t, n);
        },
        fd_fdstat_set_rights: function () {
          return o("WASISnapshotPreview1").RESULT.SUCCESS;
        },
        fd_filestat_get: function (n, r) {
          if (n < 3) {
            var e;
            switch (n) {
              case 0:
                e = "/dev/stdin";
                break;
              case 1:
                e = "/dev/stdout";
                break;
              case 2:
                e = "/dev/stderr";
                break;
              default:
                e = "/dev/undefined";
                break;
            }
            var i = m({
                path: e,
                byteLength: 0,
                timestamps: {
                  access: new Date(),
                  modification: new Date(),
                  change: new Date(),
                },
                type: o("WASISnapshotPreview1").FileType.CHARACTER_DEVICE,
              }),
              l = new Uint8Array(t.buffer, r, i.byteLength);
            return (l.set(i), o("WASISnapshotPreview1").RESULT.SUCCESS);
          }
          var s = a.stat(n);
          if (s.length === 1) return s[0];
          var u = s[1],
            c = m(u),
            d = new Uint8Array(t.buffer, r, c.byteLength);
          return (d.set(c), o("WASISnapshotPreview1").RESULT.SUCCESS);
        },
        fd_filestat_set_size: function () {
          throw r("err")("fd_filestat_set_size is not implemented");
        },
        fd_filestat_set_times: function () {
          throw r("err")("fd_filestat_set_times is not implemented");
        },
        fd_pread: function () {
          throw r("err")("fd_pread is not implemented");
        },
        fd_prestat_dir_name: function (n, r, a) {
          if (n !== 3) return o("WASISnapshotPreview1").RESULT.EBADF;
          var e = o("WATextEncoding").newTextEncoder().encode("/"),
            i = new Uint8Array(t.buffer, r, a);
          return (
            i.set(e.subarray(0, a)),
            o("WASISnapshotPreview1").RESULT.SUCCESS
          );
        },
        fd_prestat_get: function (n, r) {
          if (n !== 3) return o("WASISnapshotPreview1").RESULT.EBADF;
          var e = o("WATextEncoding").newTextEncoder().encode("."),
            a = new DataView(t.buffer, r);
          return (
            a.setUint8(0, o("WASISnapshotPreview1").PreopenType.DIR),
            a.setUint32(4, e.byteLength, !0),
            o("WASISnapshotPreview1").RESULT.SUCCESS
          );
        },
        fd_pwrite: function () {
          throw r("err")("fd_pwrite is not implemented");
        },
        fd_read: function (r, i, l, s) {
          if (r === 1 || r === 2)
            return o("WASISnapshotPreview1").RESULT.ENOTSUP;
          var e = new DataView(t.buffer),
            u = d(e, i, l),
            c = o("WATextEncoding").newTextEncoder(),
            m = 0,
            p = o("WASISnapshotPreview1").RESULT.SUCCESS;
          for (var _ of u) {
            var f = void 0;
            if (r === 0) {
              var g = n.stdin(_.byteLength);
              if (g == null) break;
              f = c.encode(g);
            } else {
              var h = a.read(r, _.byteLength);
              if (h.length === 1) {
                p = h[0];
                break;
              } else f = h[1];
            }
            var y = Math.min(_.byteLength, f.byteLength);
            (_.set(f.subarray(0, y)), (m += y));
          }
          return (e.setUint32(s, m, !0), p);
        },
        fd_readdir: function () {
          throw r("err")("fd_readdir is not implemented");
        },
        fd_renumber: function () {
          throw r("err")("fd_renumber is not implemented");
        },
        fd_seek: function (n, i, l, s) {
          var e = o("WASISnapshotPreview1").Whence.cast(l);
          if (e == null) throw r("err")("fd_seek: invalid whence");
          var u = a.seek(n, i, e);
          if (u.length === 1) return u[0];
          var c = u[0],
            d = u[1],
            m = new DataView(t.buffer);
          return (m.setBigUint64(s, d, !0), c);
        },
        fd_sync: function () {
          throw r("err")("fd_sync is not implemented");
        },
        fd_tell: function (n, r) {
          var e = a.tell(n);
          if (e.length === 1) return e[0];
          var o = e[0],
            i = e[1],
            l = new DataView(t.buffer);
          return (l.setBigUint64(r, i, !0), o);
        },
        fd_write: function (r, i, l, s) {
          if (r === 0) return o("WASISnapshotPreview1").RESULT.ENOTSUP;
          var e = new DataView(t.buffer),
            u = d(e, i, l),
            c = o("WATextEncoding").newTextDecoder(),
            m = 0,
            p = o("WASISnapshotPreview1").RESULT.SUCCESS;
          for (var _ of u)
            if (_.byteLength !== 0) {
              if (r === 1 || r === 2) {
                var f = r === 1 ? n.stdout : n.stderr,
                  g = c.decode(_);
                f(g);
              } else if (
                ((p = a.write(r, _)),
                p !== o("WASISnapshotPreview1").RESULT.SUCCESS)
              )
                break;
              m += _.byteLength;
            }
          return (e.setUint32(s, m, !0), p);
        },
        path_create_directory: function () {
          throw r("err")("path_create_directory is not implemented");
        },
        path_filestat_get: function () {
          throw r("err")("path_filestat_get is not implemented");
        },
        path_filestat_set_times: function () {
          throw r("err")("path_filestat_set_times is not implemented");
        },
        path_link: function () {
          throw r("err")("path_link is not implemented");
        },
        path_open: function (n, r, o, i, l, s, u, c, d) {
          var e = new DataView(t.buffer),
            m = _(t, o, i),
            p = a.open(n, m, l, c);
          if (p.length === 1) return p[0];
          var f = p[0],
            g = p[1];
          return (e.setUint32(d, g, !0), f);
        },
        path_readlink: function () {
          throw r("err")("path_readlink is not implemented");
        },
        path_remove_directory: function () {
          throw r("err")("path_remove_directory is not implemented");
        },
        path_rename: function () {
          throw r("err")("path_rename is not implemented");
        },
        path_symlink: function () {
          throw r("err")("path_symlink is not implemented");
        },
        path_unlink_file: function () {
          throw r("err")("path_unlink_file is not implemented");
        },
        poll_oneoff: function () {
          throw r("err")("poll_oneoff is not implemented");
        },
        proc_exit: function (t) {
          throw new u(t);
        },
        proc_raise: function () {
          throw r("err")("proc_raise is not implemented");
        },
        random_get: function (n, r) {
          var e = new Uint8Array(t.buffer, n, r);
          return (
            o("WACryptoDependencies").getCrypto().getRandomValues(e),
            o("WASISnapshotPreview1").RESULT.SUCCESS
          );
        },
        sched_yield: function () {
          throw r("err")("sched_yield is not implemented");
        },
        sock_accept: function () {
          throw r("err")("sock_accept is not implemented");
        },
        sock_recv: function () {
          throw r("err")("sock_recv is not implemented");
        },
        sock_send: function () {
          throw r("err")("sock_send is not implemented");
        },
        sock_shutdown: function () {
          throw r("err")("sock_shutdown is not implemented");
        },
      };
      return {
        getImportObject: function () {
          return { wasi_snapshot_preview1: l };
        },
        start: function (i) {
          var n = i.exports.memory;
          if (n instanceof WebAssembly.Memory) {
            if (((t = n), r("gkx")("4444"))) {
              var l = o("WASMMemoryLogger").getOrInitWasmMemoryLogger();
              l != null && l.addWasmInstanceToSet(t, e.moduleName);
            }
          } else throw r("err")("Expected memory object");
          var s = i.exports._start;
          try {
            s();
          } catch (e) {
            if (e instanceof u) return { exitCode: e.code, fs: a.fs };
            if (e instanceof WebAssembly.RuntimeError)
              return { exitCode: 134, fs: a.fs };
            throw e;
          }
          return { exitCode: 0, fs: a.fs };
        },
        initialize: function (n) {
          var e = n.exports.memory;
          if (e instanceof WebAssembly.Memory) t = e;
          else throw r("err")("Expected memory object");
          var o = n.exports;
          if ("_initialize" in o) {
            var i = o._initialize;
            i();
          }
          return { exports: o, drive: a };
        },
      };
    }
    var u = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this) || this), (n.code = t), n);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      c =
        (e = o("WASISnapshotPreview1")).RightsFlags.FD_DATASYNC |
        e.RightsFlags.FD_READ |
        e.RightsFlags.FD_SEEK |
        e.RightsFlags.FD_FDSTAT_SET_FLAGS |
        e.RightsFlags.FD_SYNC |
        e.RightsFlags.FD_TELL |
        e.RightsFlags.FD_WRITE |
        e.RightsFlags.FD_ADVISE |
        e.RightsFlags.FD_ALLOCATE |
        e.RightsFlags.PATH_CREATE_DIRECTORY |
        e.RightsFlags.PATH_CREATE_FILE |
        e.RightsFlags.PATH_LINK_SOURCE |
        e.RightsFlags.PATH_LINK_TARGET |
        e.RightsFlags.PATH_OPEN |
        e.RightsFlags.FD_READDIR |
        e.RightsFlags.PATH_READLINK |
        e.RightsFlags.PATH_RENAME_SOURCE |
        e.RightsFlags.PATH_RENAME_TARGET |
        e.RightsFlags.PATH_FILESTAT_GET |
        e.RightsFlags.PATH_FILESTAT_SET_SIZE |
        e.RightsFlags.PATH_FILESTAT_SET_TIMES |
        e.RightsFlags.FD_FILESTAT_GET |
        e.RightsFlags.FD_FILESTAT_SET_SIZE |
        e.RightsFlags.FD_FILESTAT_SET_TIMES |
        e.RightsFlags.PATH_SYMLINK |
        e.RightsFlags.PATH_REMOVE_DIRECTORY |
        e.RightsFlags.PATH_UNLINK_FILE |
        e.RightsFlags.POLL_FD_READWRITE |
        e.RightsFlags.SOCK_SHUTDOWN |
        e.RightsFlags.SOCK_ACCEPT;
    function d(e, t, n) {
      for (var r = new Array(n), o = t, a = 0; a < n; a++) {
        var i = e.getUint32(o, !0);
        o += 4;
        var l = e.getUint32(o, !0);
        ((o += 4), (r[a] = new Uint8Array(e.buffer, i, l)));
      }
      return r;
    }
    function m(e) {
      var t = new Uint8Array(o("WASISnapshotPreview1").FILESTAT_SIZE),
        n = new DataView(t.buffer);
      return (
        n.setBigUint64(0, BigInt(0), !0),
        n.setBigUint64(8, BigInt(g(e.path)), !0),
        n.setUint8(16, e.type),
        n.setBigUint64(24, BigInt(1), !0),
        n.setBigUint64(32, BigInt(e.byteLength), !0),
        n.setBigUint64(40, f(e.timestamps.access), !0),
        n.setBigUint64(48, f(e.timestamps.modification), !0),
        n.setBigUint64(56, f(e.timestamps.change), !0),
        t
      );
    }
    function p(e, t, n) {
      var r = n != null ? n : c,
        o = n != null ? n : c,
        a = new Uint8Array(24),
        i = new DataView(a.buffer, 0, 24);
      return (
        i.setUint8(0, e),
        i.setUint32(2, t, !0),
        i.setBigUint64(8, r, !0),
        i.setBigUint64(16, o, !0),
        a
      );
    }
    function _(e, t, n) {
      return o("WATextEncoding")
        .newTextDecoder()
        .decode(new Uint8Array(e.buffer, t, n));
    }
    function f(e) {
      return BigInt(e.getTime()) * BigInt(1e6);
    }
    function g(e, t) {
      t === void 0 && (t = 0);
      for (
        var n = 3735928559 ^ t, r = 1103547991 ^ t, o = 0, a;
        o < e.length;
        o++
      )
        ((a = e.charCodeAt(o)),
          (n = Math.imul(n ^ a, 2654435761)),
          (r = Math.imul(r ^ a, 1597334677)));
      return (
        (n =
          Math.imul(n ^ (n >>> 16), 2246822507) ^
          Math.imul(r ^ (r >>> 13), 3266489909)),
        (r =
          Math.imul(r ^ (r >>> 16), 2246822507) ^
          Math.imul(n ^ (n >>> 13), 3266489909)),
        4294967296 * (2097151 & r) + (n >>> 0)
      );
    }
    l.createWasi = s;
  },
  98,
);
