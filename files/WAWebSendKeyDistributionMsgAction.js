__d(
  "WAWebSendKeyDistributionMsgAction",
  [
    "Promise",
    "WAWebGroupMetadataCollection",
    "WAWebMsgKey",
    "WAWebSendMsgJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!t.isGroup())
            return (e || (e = n("Promise"))).reject(
              r("err")(
                "[messaging] sendKeyDistributionMsg: only group chats are supported`",
              ),
            );
          var a = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            i = new (r("WAWebMsgKey"))({
              from: a,
              to: t,
              id: yield r("WAWebMsgKey").newId(),
              participant: o("WAWebWidFactory").asUserWidOrThrow(a),
              selfDir: "out",
            });
          return (
            yield r("WAWebGroupMetadataCollection").find(t),
            o("WAWebSendMsgJob").encryptAndSendKeyDistributionMsg(i)
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.sendKeyDistributionMsg = s;
  },
  98,
);
