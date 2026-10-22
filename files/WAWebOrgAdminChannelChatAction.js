__d(
  "WAWebOrgAdminChannelChatAction",
  [
    "WAJids",
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebDrawerManager",
    "WAWebFollowNewsletter",
    "WAWebLoadNewsletterPreviewChatAction",
    "WAWebNewsletterCollection",
    "WAWebOpenNewsletterChat",
    "WAWebOpenNewsletterPreviewChat",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumTsSurface",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return r("WAWebNewsletterCollection").get(o("WAJids").toNewsletterJid(e));
    }
    function c(t, n) {
      if ((o("WAWebDrawerManager").DrawerManager.closeDrawerMid(), n == null)) {
        o("WAWebOpenNewsletterPreviewChat").openNewsletterPreviewChat({
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InfoDrawer,
          discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
            .CHANNEL_PROFILE,
          identifier: o("WAJids").toNewsletterJid(t),
        });
        return;
      }
      o("WAWebOpenNewsletterChat")
        .openNewsletterChat({
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InfoDrawer,
          discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
            .CHANNEL_PROFILE,
          newsletter: n,
        })
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-admin] opening a managed channel failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("org-admin-open-channel-failed");
        });
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = u(e);
          if (t == null)
            try {
              t = yield o(
                "WAWebLoadNewsletterPreviewChatAction",
              ).loadNewsletterPreviewChat(o("WAJids").toNewsletterJid(e));
            } catch (e) {
              return (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[org-admin] loading a managed channel to follow failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("org-admin-follow-channel-load-failed"),
                !1
              );
            }
          return t == null
            ? !1
            : (yield o("WAWebFollowNewsletter").followNewsletter(t, {
                discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                  .CHANNEL_PROFILE,
                eventSurface: o("WAWebWamEnumChannelEventSurface")
                  .CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
              }),
              !0);
        })),
        m.apply(this, arguments)
      );
    }
    ((l.getOrgAdminChannelChat = u),
      (l.openOrgAdminChannel = c),
      (l.followOrgAdminChannel = d));
  },
  98,
);
