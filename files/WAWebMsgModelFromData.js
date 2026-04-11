__d(
  "WAWebMsgModelFromData",
  ["WAWebMsgModel"],
  function (t, n, r, o, a, i, l) {
    function e(t) {
      return new (o("WAWebMsgModel").Msg)(
        babelHelpers.extends({}, t, {
          paymentNoteMsg: t.paymentNoteMsg ? e(t.paymentNoteMsg) : void 0,
        }),
      );
    }
    l.msgModelFromMsgData = e;
  },
  98,
);
