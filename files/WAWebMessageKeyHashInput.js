__d(
  "WAWebMessageKeyHashInput",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t, n, r, o;
      return (
        e.id +
        (e.fromMe ? "1" : "0") +
        ((t = (n = e.remote) == null ? void 0 : n.toString({ legacy: !0 })) !=
        null
          ? t
          : "") +
        ((r =
          (o = e.participant) == null ? void 0 : o.toString({ legacy: !0 })) !=
        null
          ? r
          : "")
      );
    }
    i.getMessageKeyHashInput = e;
  },
  66,
);
