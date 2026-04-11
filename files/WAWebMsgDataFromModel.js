__d(
  "WAWebMsgDataFromModel",
  [],
  function (t, n, r, o, a, i) {
    function e(t) {
      var n = t.toJSON();
      return babelHelpers.extends({}, n, {
        paymentNoteMsg: n.paymentNoteMsg ? e(n.paymentNoteMsg) : void 0,
      });
    }
    i.msgDataFromMsgModel = e;
  },
  66,
);
