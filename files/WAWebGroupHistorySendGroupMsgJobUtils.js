__d(
  "WAWebGroupHistorySendGroupMsgJobUtils",
  [
    "JSResourceForInteraction",
    "WAWebApiContact",
    "WAWebDBDeviceListFanout",
    "WAWebLazyLoadedRetriable",
    "WAWebMaybe",
    "WAWebSendGroupMsgJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return r("JSResourceForInteraction")("WAWebGroupHistoryAgentBundle")
          .__setRef("WAWebGroupHistorySendGroupMsgJobUtils")
          .load();
      }),
      "WAWebGroupHistoryAgentBundle",
    );
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = t.skDistribList,
            a = t.skList,
            i = new Set(
              r.concat(a).map(function (e) {
                return String(o("WAWebWidFactory").asUserWidOrThrow(e));
              }),
            ),
            l = function (t) {
              return o("WAWebMaybe").ifSome(
                o("WAWebApiContact").getAlternateUserWid(
                  o("WAWebWidFactory").asUserWidOrThrow(t),
                ),
                function (e) {
                  return i.has(String(e));
                },
              );
            },
            s = e.filter(function (e) {
              return i.has(String(e)) || l(e);
            }),
            u = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            c = n.normalizeAddressingModeFn([].concat(s, [u])).filter(Boolean),
            d = yield o("WAWebDBDeviceListFanout").getFanOutList({ wids: c });
          return {
            type: o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT,
            deviceList: [].concat(d),
          };
        })),
        u.apply(this, arguments)
      );
    }
    ((l.loadAgentHistoryBundle = e),
      (l.getGroupSendListForGroupHistoryBundle = s));
  },
  98,
);
