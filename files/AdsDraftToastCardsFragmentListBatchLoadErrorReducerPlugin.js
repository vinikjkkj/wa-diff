__d(
  "AdsDraftToastCardsFragmentListBatchLoadErrorReducerPlugin",
  ["AdsDraftLoadToastCardUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.errors || new Map(),
            r = [];
          e.forEach(function (e, t) {
            return r.push(
              o(
                "AdsDraftLoadToastCardUtils",
              ).createToastCardForDraftLoadFailure(t, e),
            );
          });
          var a = o("AdsDraftLoadToastCardUtils").dismissAllDraftLoadToastCards(
            t,
          );
          return o("AdsDraftLoadToastCardUtils").addDraftLoadToastCards(a, r);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
