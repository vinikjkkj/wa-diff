__d(
  "MAWSplitProtocolEntityByType",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = { receipts: [], retries: [], unhandled: [] };
      return (
        e.forEach(function (e) {
          switch (e.type) {
            case "receipt": {
              t.receipts.push(e);
              return;
            }
            case "retryReceipt": {
              t.retries.push(e);
              return;
            }
            default: {
              t.unhandled.push(e);
              return;
            }
          }
        }),
        t
      );
    }
    i.default = e;
  },
  66,
);
