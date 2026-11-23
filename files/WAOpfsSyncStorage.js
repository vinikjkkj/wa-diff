__d(
  "WAOpfsSyncStorage",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "opfs-storage-testing-filesystem";
    async function l() {
      var t;
      if (
        (navigator == null || (t = navigator.storage) == null
          ? void 0
          : t.getDirectory) == null
      )
        return Promise.reject("OPFS is not supported");
      var n = await navigator.storage.getDirectory(),
        r = await n.getDirectoryHandle(e, { create: !0 });
      return r;
    }
    async function s(e) {
      var t = e.directoryHandle,
        n = e.fileBuffer,
        r = e.fileName,
        o = await t.getFileHandle(r, { create: !0 }),
        a = await o.createSyncAccessHandle(),
        i = new DataView(n);
      return (a.write(i, { at: 0 }), a.close());
    }
    async function u(e) {
      var t = e.directoryHandle,
        n = e.fileName,
        r = await t.getFileHandle(n),
        o = await r.createSyncAccessHandle(),
        a = o.getSize(),
        i = new ArrayBuffer(a),
        l = new DataView(i);
      return (await o.read(l, { at: 0 }), o.close(), i);
    }
    async function c(e) {
      var t,
        n = e.directoryHandle,
        r = e.fileName;
      if (
        (navigator == null || (t = navigator.storage) == null
          ? void 0
          : t.getDirectory) == null
      )
        return Promise.reject("OPFS is not supported");
      await n.removeEntry(r);
    }
    async function d(e) {
      var t,
        n = e.directoryHandle;
      if (
        (navigator == null || (t = navigator.storage) == null
          ? void 0
          : t.getDirectory) == null
      )
        return Promise.reject("OPFS is not supported");
      var r = 0,
        o = !1,
        a = !1,
        i;
      try {
        for (
          var l = babelHelpers.asyncIterator(n.values()), s;
          (o = !(s = await l.next()).done);
          o = !1
        ) {
          var u = s.value;
          r++;
        }
      } catch (e) {
        ((a = !0), (i = e));
      } finally {
        try {
          o && l.return != null && (await l.return());
        } finally {
          if (a) throw i;
        }
      }
      return r;
    }
    ((i.prepareFileSystem = l),
      (i.writeToFileSystem = s),
      (i.readFromFileSystem = u),
      (i.cleanupFileSystem = c),
      (i.getFileCount = d));
  },
  66,
);
