__d(
  "WAWebNewsletterGetMessageUpdatesAction",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetMessageUpdatesJob",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterValidationUtils",
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(e, t) {
      var n = "[maybeUpdateMsgsAddOns][" + t.id.toJid() + "]";
      if (e.length !== 0) {
        var a = e.filter(function (e) {
            return e.serverId == null
              ? !1
              : e.serverId >=
                  o("WAWebNewsletterSystemMessages")
                    .EARLIEST_AVAILABLE_MESSAGE_ID &&
                  e.serverId <=
                    o("WAWebNewsletterSystemMessages")
                      .LATEST_AVAILABLE_MESSAGE_ID;
          }),
          i = Math.min.apply(
            Math,
            a.map(function (e) {
              var t;
              return (t = e.lastUpdateFromServerTs) != null ? t : 0;
            }),
          );
        if (m(i)) {
          var l = Math.min.apply(
            Math,
            r("compactMap")(a, function (e) {
              return e.serverId;
            }),
          );
          if (Number.isSafeInteger(l))
            try {
              for (var d = l - 1, p = 0, _ = []; p < a.length; ) {
                var f = Math.min(
                  a.length - p,
                  o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer(),
                );
                (_.push(
                  o(
                    "WAWebNewsletterGetMessageUpdatesJob",
                  ).getNewsletterMessageUpdates(
                    o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                      t.id.toJid(),
                    ),
                    {
                      cursor: { after: d },
                      count: f,
                      since: i > 0 ? i : void 0,
                      ids: a.map(function (e) {
                        return e.id;
                      }),
                    },
                  ),
                ),
                  (d += f),
                  (p += f));
              }
              var g = await Promise.all(_);
              g.forEach(function (e) {
                o(
                  "WAWebNewsletterBridgeApi",
                ).NewsletterBridgeApi.updateNewsletterMessages(e);
              });
            } catch (e) {
              if (
                e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                e.status === 423
              )
                try {
                  (await o("WAWebNewsletterMetadataJob").suspendNewsletter(
                    o("WAJids").toNewsletterJid(t.id.toJid()),
                  ),
                    o(
                      "WAWebNewsletterBridgeApi",
                    ).NewsletterBridgeApi.suspendNewsletter({ id: t.id }));
                } catch (e) {
                  var h = t.id.toString(),
                    y = r("getErrorSafe")(e).name;
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[maybeUpdateMsgsAddOns] suspend failed (423) ",
                          " ",
                          "",
                        ])),
                      h,
                      y,
                    )
                    .tags("newsletter")
                    .sendLogs(
                      "newsletter-maybe-update-msg-addons-suspend-error",
                    );
                  return;
                }
              else if (
                e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                e.status === 451
              )
                try {
                  (await o("WAWebNewsletterMetadataJob").geosuspendNewsletter(
                    o("WAJids").toNewsletterJid(t.id.toJid()),
                  ),
                    o(
                      "WAWebNewsletterBridgeApi",
                    ).NewsletterBridgeApi.geosuspendNewsletter({ id: t.id }));
                } catch (e) {
                  var C = t.id.toString(),
                    b = r("getErrorSafe")(e).name;
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[maybeUpdateMsgsAddOns] geosuspend failed (451) ",
                          " ",
                          "",
                        ])),
                      C,
                      b,
                    )
                    .tags("newsletter")
                    .sendLogs(
                      "newsletter-maybe-update-msg-addons-geosuspend-error",
                    );
                  return;
                }
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[maybeUpdateMsgsAddOns] Failed to update messages",
                    ])),
                )
                .tags("newsletter");
            }
        }
      }
    }
    function m(e) {
      return Number.isSafeInteger(e)
        ? o("WATimeUtils").unixTime() - e >
            o(
              "WAWebNewsletterGatingUtils",
            ).getPullMessageUpdatesThresholdSeconds()
        : !1;
    }
    l.maybeUpdateMsgsAddOns = d;
  },
  98,
);
