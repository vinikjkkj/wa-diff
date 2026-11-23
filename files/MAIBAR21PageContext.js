__d(
  "MAIBAR21PageContext",
  ["requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("MAIBAInlinedContext").__setRef(
      "MAIBAR21PageContext",
    );
    function s(t, n, r) {
      t === "" ||
        t === "0" ||
        !r() ||
        e.onReadyImmediately(function (e) {
          r() && (e.updateInlinedContext({ page_id: t }), n());
        });
    }
    function u(t) {
      var n,
        r = e.getModuleIfRequired();
      r != null &&
        ((n = r.getInlinedContext()) == null ? void 0 : n.page_id) === t &&
        r.updateInlinedContext({ page_id: null });
    }
    ((l.prepareMAIBAR21PageContext = s), (l.clearMAIBAR21PageContext = u));
  },
  98,
);
