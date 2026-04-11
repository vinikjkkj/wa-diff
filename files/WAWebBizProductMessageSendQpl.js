__d(
  "WAWebBizProductMessageSendQpl",
  ["WAWebQplFlowWrapper", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(774779800, "3434");
    function s(t, n, r) {
      (o("WAWebQplFlowWrapper").QPL.markerStart(e, {
        annotations: { string: { EntryPoint: t } },
      }),
        n !== void 0 &&
          o("WAWebQplFlowWrapper").QPL.markerAnnotate(e, {
            int: { ProductCount: n },
          }),
        r !== void 0 &&
          o("WAWebQplFlowWrapper").QPL.markerAnnotate(e, {
            int: { ContactCount: r },
          }));
    }
    function u(t) {
      t.then(function () {
        o("WAWebQplFlowWrapper").QPL.markerEnd(e, 2);
      }).catch(function () {
        o("WAWebQplFlowWrapper").QPL.markerEnd(e, 3);
      });
    }
    ((l.qplStartProductSendMessage = s), (l.qplEndProductMessageSend = u));
  },
  98,
);
