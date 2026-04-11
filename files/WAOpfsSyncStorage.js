__d(
  "WAOpfsSyncStorage",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = "opfs-storage-testing-filesystem";
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t;
          if (
            (navigator == null || (t = navigator.storage) == null
              ? void 0
              : t.getDirectory) == null
          )
            return (e || (e = n("Promise"))).reject("OPFS is not supported");
          var r = yield navigator.storage.getDirectory(),
            o = yield r.getDirectoryHandle(l, { create: !0 });
          return o;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.directoryHandle,
            n = e.fileBuffer,
            r = e.fileName,
            o = yield t.getFileHandle(r, { create: !0 }),
            a = yield o.createSyncAccessHandle(),
            i = new DataView(n);
          return (a.write(i, { at: 0 }), a.close());
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.directoryHandle,
            n = e.fileName,
            r = yield t.getFileHandle(n),
            o = yield r.createSyncAccessHandle(),
            a = o.getSize(),
            i = new ArrayBuffer(a),
            l = new DataView(i);
          return (yield o.read(l, { at: 0 }), o.close(), i);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            o = t.directoryHandle,
            a = t.fileName;
          if (
            (navigator == null || (r = navigator.storage) == null
              ? void 0
              : r.getDirectory) == null
          )
            return (e || (e = n("Promise"))).reject("OPFS is not supported");
          yield o.removeEntry(a);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            o = t.directoryHandle;
          if (
            (navigator == null || (r = navigator.storage) == null
              ? void 0
              : r.getDirectory) == null
          )
            return (e || (e = n("Promise"))).reject("OPFS is not supported");
          var a = 0,
            i = !1,
            l = !1,
            s;
          try {
            for (
              var u = babelHelpers.asyncIterator(o.values()), c;
              (i = !(c = yield u.next()).done);
              i = !1
            ) {
              var d = c.value;
              a++;
            }
          } catch (e) {
            ((l = !0), (s = e));
          } finally {
            try {
              i && u.return != null && (yield u.return());
            } finally {
              if (l) throw s;
            }
          }
          return a;
        })),
        h.apply(this, arguments)
      );
    }
    ((i.prepareFileSystem = s),
      (i.writeToFileSystem = c),
      (i.readFromFileSystem = m),
      (i.cleanupFileSystem = _),
      (i.getFileCount = g));
  },
  66,
);
