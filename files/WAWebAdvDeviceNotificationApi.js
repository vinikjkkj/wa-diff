__d(
  "WAWebAdvDeviceNotificationApi",
  [
    "Promise",
    "WALogger",
    "WAWebAdvHostedAccountTypeSystemMsg",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexHostedAddVerification",
    "WAWebProtobufsAdv.pb",
    "WAWebSchemaChat",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = { notifications: [], chatIds: [] };
          if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
            var i = [];
            if (
              t.equals(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              )
            )
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "SMB unexpected self adv system msg",
                    ])),
                )
                .tags("generateAdvAccountTypeChangeNotifications");
            else {
              n === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "accountTypeChangeNotification: check coex cache for ",
                      "",
                    ])),
                  t == null ? void 0 : t.toLogString(),
                ),
                o(
                  "WAWebBizCoexHostedAddVerification",
                ).assertThrowsWidAdvTypeFromVerificationCache(t));
              try {
                var l = yield o("WAWebSchemaChat")
                  .getChatTable()
                  .get(String(t), !1);
                l && i.push(o("WAWebWidFactory").createWid(l.id));
              } catch (e) {
                throw r("err")("get chays failed");
              }
            }
            var u = r("compactMap")(i, function (e) {
              return o(
                "WAWebAdvHostedAccountTypeSystemMsg",
              ).genAdvAccountTypeChangeNotificationMsg(e, t, n, !0);
            });
            return ((a.notifications = u), (a.chatIds = i.map(String)), a);
          }
          return a;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled())
            throw r("err")("hosted system msg gen: unexpected env");
          var t = [],
            a = new Set(),
            i = yield (u || (u = n("Promise"))).all(
              e.map(function (e) {
                var t = e.newAdvAccountType,
                  r = e.wid;
                return t != null
                  ? c(r, t)
                  : (u || (u = n("Promise"))).resolve(null);
              }),
            );
          return (
            i.forEach(function (e) {
              e &&
                ((t = t.concat(e.notifications)),
                e.chatIds.forEach(function (e) {
                  return a.add(e);
                }));
            }),
            t.length > 0
              ? { notifications: t, chatIds: Array.from(a) }
              : { notifications: [], chatIds: [] }
          );
        })),
        p.apply(this, arguments)
      );
    }
    l.bulkGenerateDeviceAndAdvAccountTypeChangeNotifications = m;
  },
  98,
);
