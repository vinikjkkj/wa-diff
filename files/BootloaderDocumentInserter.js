__d(
  "BootloaderDocumentInserter",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    function u() {
      return (
        s ||
          (s =
            document.head ||
            document.getElementsByTagName("head")[0] ||
            document.body),
        s
      );
    }
    function c(t) {
      if ((e || (e = r("ExecutionEnvironment"))).isInWorker) {
        t(null);
        return;
      }
      var n = document.createDocumentFragment();
      (t(n), u().appendChild(n));
    }
    ((l.getDOMContainerNode = u), (l.batchDOMInsert = c));
  },
  98,
);
