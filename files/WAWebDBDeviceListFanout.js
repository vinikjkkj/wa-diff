__d(
  "WAWebDBDeviceListFanout",
  [
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebBizCoexGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = t.chatWidSetToIncludeHostedInFanoutOneToOneChatOnly,
        r = t.shouldMergeAltDevices,
        a = r === void 0 ? !1 : r,
        i = t.wids,
        l = await o("WAWebApiDeviceList").getDeviceIds(i, a),
        s = new Map(),
        u = [];
      return (
        l.forEach(function (e, t) {
          if (e) {
            var r = e.devices;
            r.forEach(function (t) {
              var r = t.id === 99 || t.isHosted === !0,
                a = !1;
              if (
                (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
                  n != null &&
                  (a = (n == null ? void 0 : n.isUser()) === !0),
                !(r && !a))
              ) {
                var i = o("WAWebWidFactory").createDeviceWidFromDeviceListPk(
                  e.id,
                  t.id,
                  t.isHosted,
                );
                o("WAWebUserPrefsMeUser").isMeDevice(i) ||
                  s.set(i.toString(), i);
              }
            });
          } else {
            var a = o("WAWebWidFactory").asUserWidOrThrow(i[t]);
            (u.length < 3 && u.push(a.toString()),
              o("WAWebUserPrefsMeUser").isMeAccount(a) ||
                s.set(a.toString(), a));
          }
        }),
        u.length > 0 &&
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[getFanOutList] no device for ",
                  " wids => primary ",
                  "",
                ])),
              u.length,
              u,
            )
            .tags("messaging"),
        Array.from(s.values())
      );
    }
    l.getFanOutList = s;
  },
  98,
);
