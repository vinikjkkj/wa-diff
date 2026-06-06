__d(
  "WAWebBizBotTosUtils",
  [
    "WAWebBizBotTos.react",
    "WAWebBotBaseGating",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebContactGetters",
    "WAWebCreateBizBotSysMsgAction",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    async function u(e) {
      var t;
      if (
        !(
          !o("WAWebBotBaseGating").isBizBot1pEnabled() ||
          !((t = e.contact.businessProfile) != null && t.isBizBot1p) ||
          o("WAWebBotTos").hasSeenBizBotTos(
            o("WAWebBotTypes").BizBotType.BIZ_1P,
          ) ||
          o("WAWebContactGetters").getIsMe(e.contact)
        )
      )
        return new Promise(function (t) {
          o("WAWebModalManager").ModalManager.open(
            s.jsx(r("WAWebBizBotTos.react"), {
              onAccept: async function () {
                (await o(
                  "WAWebCreateBizBotSysMsgAction",
                ).maybeCreateBizBot1pDisclosureSysMsg(e),
                  t());
              },
              onCancel: t,
              chatEntryPoint: e.chatEntryPoint,
            }),
            { blockClose: !0 },
          );
        });
    }
    l.maybeShowBizBot1pTos = u;
  },
  98,
);
