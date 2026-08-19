__d(
  "WAWebBizBotTosUtils",
  [
    "Promise",
    "WAWebBizBotTos.react",
    "WAWebBotBaseGating",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebBusinessProfileGetters",
    "WAWebContactGetters",
    "WAWebCreateBizBotSysMsgAction",
    "WAWebModalManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.contact.businessProfile;
          if (
            !(
              !o("WAWebBotBaseGating").isBizBot1pEnabled() ||
              a == null ||
              !o("WAWebBusinessProfileGetters").getIsBizBot1p(a) ||
              o("WAWebBotTos").hasSeenBizBotTos(
                o("WAWebBotTypes").BizBotType.BIZ_1P,
              ) ||
              o("WAWebContactGetters").getIsMe(t.contact)
            )
          )
            return new (e || (e = n("Promise")))(function (e) {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebBizBotTos.react"), {
                  onAccept: n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      (yield o(
                        "WAWebCreateBizBotSysMsgAction",
                      ).maybeCreateBizBot1pDisclosureSysMsg(t),
                        e());
                    },
                  ),
                  onCancel: e,
                  chatEntryPoint: t.chatEntryPoint,
                }),
                { blockClose: !0 },
              );
            });
        })),
        d.apply(this, arguments)
      );
    }
    l.maybeShowBizBot1pTos = c;
  },
  98,
);
