__d(
  "legacy:MAWMediaWorker",
  ["CurrentWebWorker", "WAMedia.compiled", "WAMp4CheckRepairUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0;
    function s(t) {
      if (t in o("WAMp4CheckRepairUtil").namesToDesc)
        return o("WAMp4CheckRepairUtil").namesToDesc[t];
      var n = ++e;
      return (
        (o("WAMp4CheckRepairUtil").descToFakeFiles[n] = new (o(
          "WAMp4CheckRepairUtil",
        ).FakeFile)()),
        (o("WAMp4CheckRepairUtil").namesToDesc[t] = n),
        n
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
    function m(e) {
      if (e != null && e in o("WAMp4CheckRepairUtil").namesToDesc) {
        var t = o("WAMp4CheckRepairUtil").namesToDesc[e];
        (delete o("WAMp4CheckRepairUtil").descToFakeFiles[t],
          delete o("WAMp4CheckRepairUtil").namesToDesc[e]);
      }
    }
    ((self.FakeFile_exports = {
      fileDelete: m,
      fileRead: c,
      fileSize: u,
      fileWrite: d,
      openFile: s,
    }),
      r("CurrentWebWorker").setMessageHandler(function (t) {
        var n,
          a = t.asGif,
          i = t.file,
          l = t.type;
        r("WAMedia.compiled")._attachFileHandling();
        var s = ++e,
          u = (n = o("WAMp4CheckRepairUtil")).uniqFilename();
        if (
          ((n.descToFakeFiles[s] = new n.FakeFile(i)),
          (n.namesToDesc[u] = s),
          l === "fossilize")
        ) {
          var c = "out.fos";
          (o("WAMp4CheckRepairUtil").raii({ in: u, out: c }, function (e) {
            var t = r("WAMedia.compiled")._c_fossilize(e.in, e.out);
            if (t == null) {
              var n = o("WAMp4CheckRepairUtil").compressByFilename(c),
                a = n.file;
              r("CurrentWebWorker").postMessage({ file: a });
            } else
              (r("CurrentWebWorker").postMessage({
                msg:
                  "Fossilizing error (" +
                  o("WAMp4CheckRepairUtil").retrieveString(t) +
                  ")",
                type: "log",
              }),
                r("CurrentWebWorker").postMessage({ file: null }));
          }),
            m(u),
            m(c));
          return;
        }
        var d = o("WAMp4CheckRepairUtil").raii({ filename: u }, function (e) {
            var t = r("WAMedia.compiled")._c_prepFileForUpload(
                e.filename,
                a ? 1 : 0,
              ),
              n = o("WAMp4CheckRepairUtil").retrieveString(t);
            return (r("WAMedia.compiled")._free(t), n);
          }),
          p = d.split("\n"),
          _ = p[0],
          f = p[1],
          g = p[2],
          h = p[3];
        if (_) {
          var y, C;
          if (f) {
            var b = o("WAMp4CheckRepairUtil").compressByFilename(f);
            ((y = b.file), (C = b.name));
          } else ((y = null), (C = null));
          (r("CurrentWebWorker").postMessage({
            error: _,
            file: y,
            filename: C,
            type: "parsingError",
          }),
            m(C),
            m(f));
        } else {
          var v = o("WAMp4CheckRepairUtil").descToFakeFiles[
            o("WAMp4CheckRepairUtil").namesToDesc[f]
          ];
          ((v.type = g),
            r("CurrentWebWorker").postMessage({
              result: { file: v.toBlob(), isGif: h === "true", type: g },
              type: "result",
            }),
            m(f));
        }
      }));
  },
  35,
);
