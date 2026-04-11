__d(
  "WAWebGroupHistorySendGroupMsgJobUtils",
  [
    "WAWebApiContact",
    "WAWebDBDeviceListFanout",
    "WAWebMaybe",
    "WAWebSendGroupMsgJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            u = n.isLidAddressingMode
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            c = n.normalizeAddressingModeFn([].concat(s, [u])).filter(Boolean),
            d = yield o("WAWebDBDeviceListFanout").getFanOutList({ wids: c });
          return {
            type: o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT,
            deviceList: [].concat(d),
          };
        })),
        s.apply(this, arguments)
      );
    }
    l.getGroupSendListForGroupHistoryBundle = e;
  },
  98,
);
