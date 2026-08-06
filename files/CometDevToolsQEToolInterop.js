__d(
  "CometDevToolsQEToolInterop",
  ["Clipboard", "CometDevToolsQEs", "ConstUriUtils", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "qe_tool";
    function s(e) {
      e.onMessage(function (t, n) {
        switch (t) {
          case "get_qes": {
            e.postMessage("active_qes", o("CometDevToolsQEs").getActiveQEs());
            break;
          }
          case "set_qe_cheat": {
            var a, i;
            if (typeof n != "object" || n == null) {
              r("FBLogger")("Comet Dev Tools: QE").mustfix(
                "Invalid payload when setting a cheat",
              );
              return;
            }
            var l = n.urlParams != null ? n.urlParams : {};
            if (typeof l != "object") {
              r("FBLogger")("Comet Dev Tools: QE").mustfix(
                "Invalid payload when setting a cheat",
              );
              return;
            }
            var s = new URL(window.location.href),
              u = s.searchParams;
            for (var c of u.entries()) {
              var d = c[0],
                m = c[1];
              d.startsWith("qe[") === !1 && typeof l == "object" && (l[d] = m);
            }
            s.search = "";
            for (var p of Object.entries(l)) {
              var _ = p[0],
                f = p[1];
              typeof f == "string"
                ? s.searchParams.set(_, f)
                : r("FBLogger")("Comet Dev Tools: QE").mustfix(
                    "Invalid payload when setting a cheat, value is not a string",
                  );
            }
            window.location.href =
              (a =
                (i = o("ConstUriUtils").getUri(s.toString())) == null
                  ? void 0
                  : i.toString()) != null
                ? a
                : "";
            break;
          }
          case "copy":
            if (typeof n != "string") {
              r("FBLogger")("Comet Dev Tools: QE").mustfix(
                "Invalid payload when requesting copy",
              );
              return;
            }
            o("Clipboard").copy(n);
            break;
        }
      });
    }
    var u = { namespace: e, onConnection: s };
    l.default = u;
  },
  98,
);
