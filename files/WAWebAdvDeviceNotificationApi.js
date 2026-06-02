__d(
  "WAWebAdvDeviceNotificationApi",
  [
    "WALogger",
    "WAWebAdvHostedAccountTypeSystemMsg",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexHostedAddVerification",
    "WAWebProtobufsAdv.pb",
    "WAWebSchemaChat",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "compactMap",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      var a = { notifications: [], chatIds: [] };
      if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
        var i = [];
        if (t.equals(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()))
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
            var l = await o("WAWebSchemaChat")
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
    }
    async function c(e) {
      if (!o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled())
        throw r("err")("hosted system msg gen: unexpected env");
      var t = [],
        n = new Set(),
        a = await Promise.all(
          e.map(function (e) {
            var t = e.newAdvAccountType,
              n = e.wid;
            return t != null ? u(n, t) : Promise.resolve(null);
          }),
        );
      return (
        a.forEach(function (e) {
          e &&
            ((t = t.concat(e.notifications)),
            e.chatIds.forEach(function (e) {
              return n.add(e);
            }));
        }),
        t.length > 0
          ? { notifications: t, chatIds: Array.from(n) }
          : { notifications: [], chatIds: [] }
      );
    }
    l.bulkGenerateDeviceAndAdvAccountTypeChangeNotifications = c;
  },
  98,
);
