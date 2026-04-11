__d(
  "WASIDrive",
  ["WASISnapshotPreview1", "WATextEncoding"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e) {
          ((this.nextFD = 10),
            (this.openMap = new Map()),
            (this.fs = babelHelpers.extends({}, e)),
            this.openMap.set(3, new c(this.fs, "/")));
        }
        var t = e.prototype;
        return (
          (t.$1 = function (t, n, r) {
            var e = new s(t, r);
            n && (e.buffer = new Uint8Array(new ArrayBuffer(1024), 0, 0));
            var a = this.nextFD;
            return (
              this.openMap.set(a, e),
              this.nextFD++,
              [o("WASISnapshotPreview1").RESULT.SUCCESS, a]
            );
          }),
          (t.$2 = function (t, n) {
            var e = new c(t, n),
              r = this.nextFD;
            return (
              this.openMap.set(r, e),
              this.nextFD++,
              [o("WASISnapshotPreview1").RESULT.SUCCESS, r]
            );
          }),
          (t.$3 = function (t, n) {
            return n === "." ? !0 : t.containsDirectory(n);
          }),
          (t.open = function (t, n, r, a) {
            var e,
              i = !!(r & (e = o("WASISnapshotPreview1")).OpenFlags.CREAT),
              l = !!(r & e.OpenFlags.DIRECTORY),
              s = !!(r & e.OpenFlags.EXCL),
              u = !!(r & e.OpenFlags.TRUNC),
              d = this.openMap.get(t);
            if (!(d instanceof c))
              return [o("WASISnapshotPreview1").RESULT.EBADF];
            if (d.containsFile(n)) {
              if (l) return [o("WASISnapshotPreview1").RESULT.ENOTDIR];
              if (s) return [o("WASISnapshotPreview1").RESULT.EEXIST];
              var m = d.get(n);
              return this.$1(m, u, a);
            } else if (this.$3(d, n)) {
              if (n === ".") return this.$2(this.fs, "/");
              var p = "/" + n + "/",
                _ = Object.entries(this.fs).filter(function (e) {
                  var t = e[0];
                  return t.startsWith(p);
                });
              return this.$2(Object.fromEntries(_), p);
            } else {
              if (i) {
                var f = d.fullPath(n);
                return (
                  (this.fs[f] = {
                    path: f,
                    mode: "binary",
                    content: new Uint8Array(0),
                    timestamps: {
                      access: new Date(),
                      modification: new Date(),
                      change: new Date(),
                    },
                  }),
                  this.$1(this.fs[f], u, a)
                );
              }
              return [o("WASISnapshotPreview1").RESULT.ENOTCAPABLE];
            }
          }),
          (t.close = function (t) {
            if (!this.openMap.has(t))
              return o("WASISnapshotPreview1").RESULT.EBADF;
            var e = this.openMap.get(t);
            return (
              e instanceof s && e.sync(),
              this.openMap.delete(t),
              o("WASISnapshotPreview1").RESULT.SUCCESS
            );
          }),
          (t.read = function (t, n) {
            var e = this.openMap.get(t);
            return !e || e instanceof c
              ? [o("WASISnapshotPreview1").RESULT.EBADF]
              : [o("WASISnapshotPreview1").RESULT.SUCCESS, e.read(n)];
          }),
          (t.pread = function (t, n, r) {
            var e = this.openMap.get(t);
            return !e || e instanceof c
              ? [o("WASISnapshotPreview1").RESULT.EBADF]
              : [o("WASISnapshotPreview1").RESULT.SUCCESS, e.pread(n, r)];
          }),
          (t.write = function (t, n) {
            var e = this.openMap.get(t);
            return !e || e instanceof c
              ? o("WASISnapshotPreview1").RESULT.EBADF
              : (e.write(n), o("WASISnapshotPreview1").RESULT.SUCCESS);
          }),
          (t.pwrite = function (t, n, r) {
            var e = this.openMap.get(t);
            return !e || e instanceof c
              ? o("WASISnapshotPreview1").RESULT.EBADF
              : (e.pwrite(n, r), o("WASISnapshotPreview1").RESULT.SUCCESS);
          }),
          (t.sync = function (t) {
            var e = this.openMap.get(t);
            return !e || e instanceof c
              ? o("WASISnapshotPreview1").RESULT.EBADF
              : (e.sync(), o("WASISnapshotPreview1").RESULT.SUCCESS);
          }),
          (t.seek = function (t, n, r) {
            var e = this.openMap.get(t);
            return !e || e instanceof c
              ? [o("WASISnapshotPreview1").RESULT.EBADF]
              : [o("WASISnapshotPreview1").RESULT.SUCCESS, e.seek(n, r)];
          }),
          (t.tell = function (t) {
            var e = this.openMap.get(t);
            return !e || e instanceof c
              ? [o("WASISnapshotPreview1").RESULT.EBADF]
              : [o("WASISnapshotPreview1").RESULT.SUCCESS, e.tell()];
          }),
          (t.renumber = function (t, n) {
            if (!this.exists(t) || !this.exists(n))
              return o("WASISnapshotPreview1").RESULT.EBADF;
            if (t === n) return o("WASISnapshotPreview1").RESULT.SUCCESS;
            this.close(n);
            var e = this.openMap.get(t);
            return (
              this.openMap.set(n, e),
              o("WASISnapshotPreview1").RESULT.SUCCESS
            );
          }),
          (t.unlink = function (t, n) {
            var e = this.openMap.get(t);
            if (!(e instanceof c))
              return o("WASISnapshotPreview1").RESULT.EBADF;
            if (!e.contains(n)) return o("WASISnapshotPreview1").RESULT.ENOENT;
            for (var r of Object.keys(this.fs))
              (r === e.fullPath(n) || r.startsWith(e.fullPath(n) + "/")) &&
                delete this.fs[r];
            return o("WASISnapshotPreview1").RESULT.SUCCESS;
          }),
          (t.rename = function (t, n, r, a) {
            var e = this.openMap.get(t),
              i = this.openMap.get(r);
            if (!(e instanceof c) || !(i instanceof c))
              return o("WASISnapshotPreview1").RESULT.EBADF;
            if (!e.contains(n)) return o("WASISnapshotPreview1").RESULT.ENOENT;
            if (i.contains(a)) return o("WASISnapshotPreview1").RESULT.EEXIST;
            var l = e.fullPath(n),
              s = i.fullPath(a);
            for (var u of Object.keys(this.fs))
              if (u.startsWith(l)) {
                var d = u.replace(l, s);
                ((this.fs[d] = this.fs[u]),
                  (this.fs[d].path = d),
                  delete this.fs[u]);
              }
            return o("WASISnapshotPreview1").RESULT.SUCCESS;
          }),
          (t.list = function (t) {
            var e = this.openMap.get(t);
            return e instanceof c
              ? [o("WASISnapshotPreview1").RESULT.SUCCESS, e.list()]
              : [o("WASISnapshotPreview1").RESULT.EBADF];
          }),
          (t.stat = function (t) {
            var e = this.openMap.get(t);
            return e instanceof s
              ? [o("WASISnapshotPreview1").RESULT.SUCCESS, e.stat()]
              : [o("WASISnapshotPreview1").RESULT.EBADF];
          }),
          (t.pathStat = function (t, n) {
            var e = this.openMap.get(t);
            if (!(e instanceof c))
              return [o("WASISnapshotPreview1").RESULT.EBADF];
            if (e.containsFile(n)) {
              var r = e.fullPath(n),
                a = new s(this.fs[r], 0).stat();
              return [o("WASISnapshotPreview1").RESULT.SUCCESS, a];
            } else if (this.$3(e, n)) {
              if (n === ".")
                return [
                  o("WASISnapshotPreview1").RESULT.SUCCESS,
                  new c(this.fs, "/").stat(),
                ];
              var i = "/" + n + "/",
                l = Object.entries(this.fs).filter(function (e) {
                  var t = e[0];
                  return t.startsWith(i);
                }),
                u = new c(Object.fromEntries(l), i).stat();
              return [o("WASISnapshotPreview1").RESULT.SUCCESS, u];
            } else return [o("WASISnapshotPreview1").RESULT.ENOTCAPABLE];
          }),
          (t.setFlags = function (t, n) {
            var e = this.openMap.get(t);
            return e instanceof s
              ? (e.setFlags(n), o("WASISnapshotPreview1").RESULT.SUCCESS)
              : o("WASISnapshotPreview1").RESULT.EBADF;
          }),
          (t.setSize = function (t, n) {
            var e = this.openMap.get(t);
            return e instanceof s
              ? (e.setSize(Number(n)), o("WASISnapshotPreview1").RESULT.SUCCESS)
              : o("WASISnapshotPreview1").RESULT.EBADF;
          }),
          (t.setAccessTime = function (t, n) {
            var e = this.openMap.get(t);
            return e instanceof s
              ? (e.setAccessTime(n), o("WASISnapshotPreview1").RESULT.SUCCESS)
              : o("WASISnapshotPreview1").RESULT.EBADF;
          }),
          (t.setModificationTime = function (t, n) {
            var e = this.openMap.get(t);
            return e instanceof s
              ? (e.setModificationTime(n),
                o("WASISnapshotPreview1").RESULT.SUCCESS)
              : o("WASISnapshotPreview1").RESULT.EBADF;
          }),
          (t.pathSetAccessTime = function (t, n, r) {
            var e = this.openMap.get(t);
            if (!(e instanceof c))
              return o("WASISnapshotPreview1").RESULT.EBADF;
            var a = e.get(n);
            if (a == null) return o("WASISnapshotPreview1").RESULT.ENOTCAPABLE;
            var i = new s(a, 0);
            return (
              i.setAccessTime(r),
              i.sync(),
              o("WASISnapshotPreview1").RESULT.SUCCESS
            );
          }),
          (t.pathSetModificationTime = function (t, n, r) {
            var e = this.openMap.get(t);
            if (!(e instanceof c))
              return o("WASISnapshotPreview1").RESULT.EBADF;
            var a = e.get(n);
            if (a == null) return o("WASISnapshotPreview1").RESULT.ENOTCAPABLE;
            var i = new s(a, 0);
            return (
              i.setModificationTime(r),
              i.sync(),
              o("WASISnapshotPreview1").RESULT.SUCCESS
            );
          }),
          (t.pathCreateDir = function (t, n) {
            var e = this.openMap.get(t);
            if (!(e instanceof c))
              return o("WASISnapshotPreview1").RESULT.EBADF;
            if (e.contains(n))
              return o("WASISnapshotPreview1").RESULT.ENOTCAPABLE;
            var r = e.fullPath(n) + "/.runno";
            return (
              (this.fs[r] = {
                path: r,
                timestamps: {
                  access: new Date(),
                  modification: new Date(),
                  change: new Date(),
                },
                mode: "string",
                content: "",
              }),
              o("WASISnapshotPreview1").RESULT.SUCCESS
            );
          }),
          (t.exists = function (t) {
            return this.openMap.has(t);
          }),
          (t.fileType = function (t) {
            var e = this.openMap.get(t);
            return e
              ? e instanceof s
                ? o("WASISnapshotPreview1").FileType.REGULAR_FILE
                : o("WASISnapshotPreview1").FileType.DIRECTORY
              : o("WASISnapshotPreview1").FileType.UNKNOWN;
          }),
          (t.fileFdflags = function (t) {
            var e = this.openMap.get(t);
            return e instanceof s ? e.fdflags : 0;
          }),
          e
        );
      })(),
      s = (function () {
        function e(e, t) {
          if (
            ((this.$1 = BigInt(0)),
            (this.isDirty = !1),
            (this.file = e),
            this.file.mode === "string")
          ) {
            var n = this.file.content,
              r = o("WATextEncoding").newTextEncoder();
            this.buffer = r.encode(n);
          } else this.buffer = this.file.content;
          ((this.fdflags = t),
            (this.flagAppend = !!(
              t & o("WASISnapshotPreview1").FileDescriptorFlags.APPEND
            )),
            (this.flagDSync = !!(
              t & o("WASISnapshotPreview1").FileDescriptorFlags.DSYNC
            )),
            (this.flagNonBlock = !!(
              t & o("WASISnapshotPreview1").FileDescriptorFlags.NONBLOCK
            )),
            (this.flagRSync = !!(
              t & o("WASISnapshotPreview1").FileDescriptorFlags.RSYNC
            )),
            (this.flagSync = !!(
              t & o("WASISnapshotPreview1").FileDescriptorFlags.SYNC
            )));
        }
        var t = e.prototype;
        return (
          (t.getOffset = function () {
            return Number(this.$1);
          }),
          (t.read = function (t) {
            var e = this.buffer.subarray(
              this.getOffset(),
              this.getOffset() + t,
            );
            return ((this.$1 += BigInt(e.length)), e);
          }),
          (t.pread = function (t, n) {
            return this.buffer.subarray(n, n + t);
          }),
          (t.write = function (t) {
            if (((this.isDirty = !0), this.flagAppend)) {
              var e = this.buffer.length;
              (this.$2(e + t.byteLength), this.buffer.set(t, e));
            } else {
              var n = Math.max(
                this.getOffset() + t.byteLength,
                this.buffer.byteLength,
              );
              (this.$2(n),
                this.buffer.set(t, this.getOffset()),
                (this.$1 += BigInt(t.byteLength)));
            }
            (this.flagDSync || this.flagSync) && this.sync();
          }),
          (t.pwrite = function (t, n) {
            if (((this.isDirty = !0), this.flagAppend)) {
              var e = this.buffer.length;
              (this.$2(e + t.byteLength), this.buffer.set(t, e));
            } else {
              var r = Math.max(n + t.byteLength, this.buffer.byteLength);
              (this.$2(r), this.buffer.set(t, n));
            }
            (this.flagDSync || this.flagSync) && this.sync();
          }),
          (t.sync = function () {
            if (this.isDirty) {
              if (((this.isDirty = !1), this.file.mode === "binary")) {
                this.file.content = new Uint8Array(this.buffer);
                return;
              }
              var e = o("WATextEncoding").newTextDecoder();
              this.file.content = e.decode(this.buffer);
            }
          }),
          (t.seek = function (t, n) {
            switch (n) {
              case o("WASISnapshotPreview1").Whence.SET:
                this.$1 = t;
                break;
              case o("WASISnapshotPreview1").Whence.CUR:
                this.$1 += t;
                break;
              case o("WASISnapshotPreview1").Whence.END:
                this.$1 = BigInt(this.buffer.length) + t;
                break;
            }
            return this.$1;
          }),
          (t.tell = function () {
            return this.$1;
          }),
          (t.stat = function () {
            return {
              path: this.file.path,
              timestamps: this.file.timestamps,
              type: o("WASISnapshotPreview1").FileType.REGULAR_FILE,
              byteLength: this.buffer.length,
            };
          }),
          (t.setFlags = function (t) {
            this.fdflags = t;
          }),
          (t.setSize = function (t) {
            this.$2(t);
          }),
          (t.setAccessTime = function (t) {
            this.file.timestamps.access = t;
          }),
          (t.setModificationTime = function (t) {
            this.file.timestamps.modification = t;
          }),
          (t.$2 = function (t) {
            if (t <= this.buffer.buffer.byteLength) {
              this.buffer = new Uint8Array(this.buffer.buffer, 0, t);
              return;
            }
            var e;
            this.buffer.buffer.byteLength === 0
              ? (e = new ArrayBuffer(t < 1024 ? 1024 : t * 2))
              : t > this.buffer.buffer.byteLength * 2
                ? (e = new ArrayBuffer(t * 2))
                : (e = new ArrayBuffer(this.buffer.buffer.byteLength * 2));
            var n = new Uint8Array(e, 0, t);
            (n.set(this.buffer), (this.buffer = n));
          }),
          e
        );
      })();
    function u(e, t) {
      var n = t.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&"),
        r = new RegExp("^" + n);
      return e.replace(r, "");
    }
    var c = (function () {
      function e(e, t) {
        ((this.dir = e), (this.prefix = t));
      }
      var t = e.prototype;
      return (
        (t.containsFile = function (t) {
          for (var e of Object.keys(this.dir)) {
            var n = u(e, this.prefix);
            if (n === t) return !0;
          }
          return !1;
        }),
        (t.containsDirectory = function (t) {
          for (var e of Object.keys(this.dir)) {
            var n = u(e, this.prefix);
            if (n.startsWith(t + "/")) return !0;
          }
          return !1;
        }),
        (t.contains = function (t) {
          for (var e of Object.keys(this.dir)) {
            var n = u(e, this.prefix);
            if (n === t || n.startsWith(t + "/")) return !0;
          }
          return !1;
        }),
        (t.get = function (t) {
          return this.dir[this.fullPath(t)];
        }),
        (t.fullPath = function (t) {
          return "" + this.prefix + t;
        }),
        (t.list = function () {
          var e = [],
            t = new Set();
          for (var n of Object.keys(this.dir)) {
            var r = u(n, this.prefix);
            if (r.includes("/")) {
              var a = r.split("/")[0];
              if (t.has(a)) continue;
              (t.add(a),
                e.push({
                  name: a,
                  type: o("WASISnapshotPreview1").FileType.DIRECTORY,
                }));
            } else
              e.push({
                name: r,
                type: o("WASISnapshotPreview1").FileType.REGULAR_FILE,
              });
          }
          return e;
        }),
        (t.stat = function () {
          return {
            path: this.prefix,
            timestamps: {
              access: new Date(),
              modification: new Date(),
              change: new Date(),
            },
            type: o("WASISnapshotPreview1").FileType.DIRECTORY,
            byteLength: 0,
          };
        }),
        e
      );
    })();
    l.WASIDrive = e;
  },
  98,
);
