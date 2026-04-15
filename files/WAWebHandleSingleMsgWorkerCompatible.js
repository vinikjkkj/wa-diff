__d(
  "WAWebHandleSingleMsgWorkerCompatible",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return r("nullthrows")(e, "HandleSingleMsg is not initialised");
    }
    function u(t) {
      e = t;
    }
    function c(e) {
      return s()(e);
    }
    ((l.getInstance = s), (l.setInstance = u), (l.handleSingleMsg = c));
  },
  98,
);
