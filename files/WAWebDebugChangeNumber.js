__d(
  "WAWebDebugChangeNumber",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "@lid";
    function c(e) {
      return o("WAWebWidFactory").createUserLidOrThrow(
        e.includes("@") ? e : "" + e + u,
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = window.chat;
          if (a == null) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[insertChangeNumberSystemMsgWithLids] no active chat \u2014 open a chat first",
                ])),
            );
            return;
          }
          var i = c(t),
            l = c(n),
            u = [i, l],
            d = {
              id: new (r("WAWebMsgKey"))({
                remote: a.id,
                fromMe: !1,
                id: yield r("WAWebMsgKey").newId(),
              }),
              from: a.id,
              subtype: "change_number",
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              t: o("WATimeUtils").unixTime(),
              to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              type: "notification_template",
              kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
              templateParams: u,
            };
          (yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
            chatId: a.id,
            newMsg: d,
            handleSingleMsgOrigin: "changeNumberNotification",
          }),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[insertChangeNumberSystemMsgWithLids] inserted change_number msg with lids ",
                  " -> ",
                  "",
                ])),
              i.toLogString(),
              l.toLogString(),
            ));
        })),
        m.apply(this, arguments)
      );
    }
    d.doc =
      'Insert a change_number system message into the active chat with two LID template params (oldLid, newLid) to repro T254377164. Args accept "12345@lid" or a bare "12345".';
    var p = { insertChangeNumberSystemMsgWithLids: d };
    l.default = p;
  },
  98,
);
