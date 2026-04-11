__d(
  "legacy:WAMediaWorker",
  ["CurrentWebWorker", "WAMedia.compiled", "WAMp4CheckRepairUtil"],
  function (t, n, r, o, a, i, l) {
    var e = 0;
    function s(t, n) {
      if (t in o("WAMp4CheckRepairUtil").namesToDesc)
        return o("WAMp4CheckRepairUtil").namesToDesc[t];
      var r = ++e;
      return (
        (o("WAMp4CheckRepairUtil").descToFakeFiles[r] = new (o(
          "WAMp4CheckRepairUtil",
        ).FakeFile)()),
        (o("WAMp4CheckRepairUtil").namesToDesc[t] = r),
        r
      );
    }
    function u(e) {
      return o("WAMp4CheckRepairUtil").descToFakeFiles[e].size;
    }
    function c(e, t, n, r) {
      return o("WAMp4CheckRepairUtil").descToFakeFiles[e].read(t, r, n);
    }
    function d(e, t, n, r) {
      return o("WAMp4CheckRepairUtil").descToFakeFiles[e].write(t, r, n);
    }
    function m(e) {}
    function p(e) {
      if (e && e in o("WAMp4CheckRepairUtil").namesToDesc) {
        var t = o("WAMp4CheckRepairUtil").namesToDesc[e];
        (delete o("WAMp4CheckRepairUtil").descToFakeFiles[t],
          delete o("WAMp4CheckRepairUtil").namesToDesc[e]);
      }
    }
    ((self.FakeFile_exports = {
      openFile: s,
      fileSize: u,
      fileRead: c,
      fileWrite: d,
      fileClose: m,
      fileDelete: p,
    }),
      n("CurrentWebWorker").setMessageHandler(function (t) {
        var r,
          a = t.type,
          i = t.file,
          l = t.asGif;
        n("WAMedia.compiled")._attachFileHandling();
        var s = ++e,
          u = (r = o("WAMp4CheckRepairUtil")).uniqFilename();
        if (
          ((r.descToFakeFiles[s] = new r.FakeFile(i)),
          (r.namesToDesc[u] = s),
          a === "fossilize")
        ) {
          var c = "out.fos";
          (o("WAMp4CheckRepairUtil").raii({ in: u, out: c }, function (e) {
            var t = n("WAMedia.compiled")._c_fossilize(e.in, e.out);
            if (t == null) {
              var r = o("WAMp4CheckRepairUtil").compressByFilename(c),
                a = r.file;
              n("CurrentWebWorker").postMessage({ file: a });
            } else
              (n("CurrentWebWorker").postMessage({
                type: "log",
                msg:
                  "Fossilizing error (" +
                  o("WAMp4CheckRepairUtil").retrieveString(t) +
                  ")",
              }),
                n("CurrentWebWorker").postMessage({ file: null }));
          }),
            p(u),
            p(c));
          return;
        }
        var d = o("WAMp4CheckRepairUtil").raii({ filename: u }, function (e) {
            var t = n("WAMedia.compiled")._c_prepFileForUpload(
                e.filename,
                l ? 1 : 0,
              ),
              r = o("WAMp4CheckRepairUtil").retrieveString(t);
            return (n("WAMedia.compiled")._free(t), r);
          }),
          m = d.split("\n"),
          _ = m[0],
          f = m[1],
          g = m[2],
          h = m[3];
        if (_) {
          var y, C;
          if (f) {
            var b = o("WAMp4CheckRepairUtil").compressByFilename(f);
            ((y = b.file), (C = b.name));
          } else ((y = null), (C = null));
          (n("CurrentWebWorker").postMessage({
            type: "parsingError",
            error: _,
            filename: C,
            file: y,
          }),
            p(C),
            p(f));
        } else {
          var v = o("WAMp4CheckRepairUtil").descToFakeFiles[
            o("WAMp4CheckRepairUtil").namesToDesc[f]
          ];
          ((v.type = g),
            n("CurrentWebWorker").postMessage({
              type: "result",
              result: { type: g, file: v.toBlob(), isGif: h === "true" },
            }),
            p(f));
        }
      }));
  },
  35,
);
