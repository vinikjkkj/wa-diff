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
    async function u(t, n) {
      await o("WAWebNewsletterQueues").newsletterJoinNotificationQueue.wait();
      var a = n.xwa2_notify_newsletter_on_state_change,
        i = a.id,
        l = a.is_requestor,
        u = a.state;
      if (i == null)
        throw r("err")(
          "unexpected null id in xwa2_notify_newsletter_on_state_change",
        );
      var d = o("WAJids").toNewsletterJid(i),
        m = o("WAWebJidToWid").newsletterJidToWid(d),
        p = l === !0,
        _ = u == null ? void 0 : u.type,
        f = await o("WAWebApiChatCommon").getChatRecord(m);
      if (f != null)
        try {
          switch (_) {
            case "DELETED":
              return (
                await o("WAWebNewsletterQueues").newsletterDeleteQueue.wait(),
                await c(p, d, m, f.name)
              );
            case "ACTIVE":
            case "SUSPENDED":
            case "GEOSUSPENDED": {
              var g = s(_),
                h = o(
                  "WAWebNewsletterMetadataQueryJob",
                ).emptyNewsletterMetadataType(d),
                y = babelHelpers.extends({}, h, {
                  newsletterStateMetadataMixin: { stateType: g },
                }),
                C = o("WAWebNewsletterModelUtils").mapNewsletterToModels(y),
                b = C.chat,
                v = C.metadata,
                S = C.pic;
              if (
                (await o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(
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
              await o("WAWebBackendApi").frontendSendAndReceive(
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
    }
    async function c(e, t, n, r) {
      return e ? d(t, n) : m(t, n, r);
    }
    async function d(e, t) {
      (await o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(
        e.toString(),
      ),
        await o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(t),
        await o("WAWebNewsletterMetadataJob").deleteNewsletterPicture(
          e.toString(),
        ),
        await o("WAWebBackendApi").frontendSendAndReceive("deleteNewsletter", {
          id: t,
          keep: !0,
        }));
    }
    async function m(e, t, n) {
      var r = o(
        "WAWebNewsletterSystemMessages",
      ).genNewsletterDeletionSystemMessages({ id: e, name: n });
      (await o("WAWebNewsletterMetadataJob").updateNewsletterMetadata({
        id: e,
        terminated: !0,
      }),
        await o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords(
          r,
        ),
        await o("WAWebBackendApi").frontendSendAndReceive(
          "terminateNewsletter",
          { id: t, msgs: r },
        ));
    }
    l.mexHandleNewsletterStateChange = u;
  },
  98,
);
