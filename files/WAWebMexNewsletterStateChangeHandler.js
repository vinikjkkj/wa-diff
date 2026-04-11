__d(
  "WAWebMexNewsletterStateChangeHandler",
  [
    "WAJids",
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebBackendApi",
    "WAWebJidToWid",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterMetadataQueryJob",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterQueues",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNux",
    "WAWebUserPrefsNuxPreferences",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      switch (e) {
        case "ACTIVE":
          return "active";
        case "SUSPENDED":
          return "suspended";
        case "GEOSUSPENDED":
          return "geosuspended";
      }
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          yield o(
            "WAWebNewsletterQueues",
          ).newsletterJoinNotificationQueue.wait();
          var a = n.xwa2_notify_newsletter_on_state_change,
            i = a.id,
            l = a.is_requestor,
            u = a.state;
          if (i == null)
            throw r("err")(
              "unexpected null id in xwa2_notify_newsletter_on_state_change",
            );
          var c = o("WAJids").toNewsletterJid(i),
            m = o("WAWebJidToWid").newsletterJidToWid(c),
            p = l === !0,
            _ = u == null ? void 0 : u.type,
            f = yield o("WAWebApiChatCommon").getChatRecord(m);
          if (f != null)
            try {
              switch (_) {
                case "DELETED":
                  return (
                    yield o(
                      "WAWebNewsletterQueues",
                    ).newsletterDeleteQueue.wait(),
                    yield d(p, c, m, f.name)
                  );
                case "ACTIVE":
                case "SUSPENDED":
                case "GEOSUSPENDED": {
                  var g = s(_),
                    h = o(
                      "WAWebNewsletterMetadataQueryJob",
                    ).emptyNewsletterMetadataType(c),
                    y = babelHelpers.extends({}, h, {
                      newsletterStateMetadataMixin: { stateType: g },
                    }),
                    C = o("WAWebNewsletterModelUtils").mapNewsletterToModels(y),
                    b = C.chat,
                    v = C.metadata,
                    S = C.pic;
                  if (
                    (yield o(
                      "WAWebNewsletterMetadataJob",
                    ).updateNewsletterMetadata(
                      o(
                        "WAWebNewsletterStorageUtils",
                      ).createNewsletterMetadataObjectForStorage(v),
                    ),
                    v.suspended === !0)
                  ) {
                    var R = o("WAWebNux").getNewsletterAlertsBannerNuxKey(
                      v.id.toString(),
                    );
                    o("WAWebUserPrefsNuxPreferences").resetNux(R);
                  }
                  yield o("WAWebBackendApi").frontendSendAndReceive(
                    "updateNewsletterMetadata",
                    { metadata: v, newsletter: b, pic: S },
                  );
                  break;
                }
                default: {
                  var L = _ == null ? "null or undefined" : _;
                  throw r("err")("Unexpected state change type: " + L);
                }
              }
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex][newsletter] state-change update to ",
                      " failed",
                    ])),
                  _,
                )
                .catching(r("getErrorSafe")(t))
                .tags("mex", "newsletter")
                .sendLogs("mex-newsletternotification-state-change-fail");
            }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            return e ? p(t, n) : f(t, n, r);
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(
            e.toString(),
          ),
            yield o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(t),
            yield o("WAWebNewsletterMetadataJob").deleteNewsletterPicture(
              e.toString(),
            ),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "deleteNewsletter",
              { id: t, keep: !0 },
            ));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o(
            "WAWebNewsletterSystemMessages",
          ).genNewsletterDeletionSystemMessages({ id: e, name: n });
          (yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata({
            id: e,
            terminated: !0,
          }),
            yield o(
              "WAWebNewsletterUpdateMsgsRecordsJob",
            ).addNewsletterMsgsRecords(r),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "terminateNewsletter",
              { id: t, msgs: r },
            ));
        })),
        g.apply(this, arguments)
      );
    }
    l.mexHandleNewsletterStateChange = u;
  },
  98,
);
