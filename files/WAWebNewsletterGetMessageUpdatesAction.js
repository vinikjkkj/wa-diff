__d(
  "WAWebNewsletterGetMessageUpdatesAction",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = "[maybeUpdateMsgsAddOns][" + t.id.toJid() + "]";
          if (e.length !== 0) {
            var i = e.filter(function (e) {
                return e.serverId == null
                  ? !1
                  : e.serverId >=
                      o("WAWebNewsletterSystemMessages")
                        .EARLIEST_AVAILABLE_MESSAGE_ID &&
                      e.serverId <=
                        o("WAWebNewsletterSystemMessages")
                          .LATEST_AVAILABLE_MESSAGE_ID;
              }),
              l = Math.min.apply(
                Math,
                i.map(function (e) {
                  var t;
                  return (t = e.lastUpdateFromServerTs) != null ? t : 0;
                }),
              );
            if (_(l)) {
              var m = Math.min.apply(
                Math,
                r("compactMap")(i, function (e) {
                  return e.serverId;
                }),
              );
              if (Number.isSafeInteger(m))
                try {
                  for (var p = m - 1, f = 0, g = []; f < i.length; ) {
                    var h = Math.min(
                      i.length - f,
                      o(
                        "WAWebNewsletterGatingUtils",
                      ).getMaxMsgCountFromServer(),
                    );
                    (g.push(
                      o(
                        "WAWebNewsletterGetMessageUpdatesJob",
                      ).getNewsletterMessageUpdates(
                        o(
                          "WAWebNewsletterValidationUtils",
                        ).toNewsletterJidOrThrow(t.id.toJid()),
                        {
                          cursor: { after: p },
                          count: h,
                          since: l > 0 ? l : void 0,
                          ids: i.map(function (e) {
                            return e.id;
                          }),
                        },
                      ),
                    ),
                      (p += h),
                      (f += h));
                  }
                  var y = yield (d || (d = n("Promise"))).all(g);
                  y.forEach(function (e) {
                    o(
                      "WAWebNewsletterBridgeApi",
                    ).NewsletterBridgeApi.updateNewsletterMessages(e);
                  });
                } catch (e) {
                  if (
                    e instanceof
                      o("WAWebBackendErrors").ServerStatusCodeError &&
                    e.status === 423
                  )
                    try {
                      (yield o("WAWebNewsletterMetadataJob").suspendNewsletter(
                        o("WAJids").toNewsletterJid(t.id.toJid()),
                      ),
                        o(
                          "WAWebNewsletterBridgeApi",
                        ).NewsletterBridgeApi.suspendNewsletter({ id: t.id }));
                    } catch (e) {
                      var C = t.id.toString(),
                        b = r("getErrorSafe")(e).name;
                      o("WALogger")
                        .ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[maybeUpdateMsgsAddOns] suspend failed (423) ",
                              " ",
                              "",
                            ])),
                          C,
                          b,
                        )
                        .tags("newsletter")
                        .sendLogs(
                          "newsletter-maybe-update-msg-addons-suspend-error",
                        );
                      return;
                    }
                  else if (
                    e instanceof
                      o("WAWebBackendErrors").ServerStatusCodeError &&
                    e.status === 451
                  )
                    try {
                      (yield o(
                        "WAWebNewsletterMetadataJob",
                      ).geosuspendNewsletter(
                        o("WAJids").toNewsletterJid(t.id.toJid()),
                      ),
                        o(
                          "WAWebNewsletterBridgeApi",
                        ).NewsletterBridgeApi.geosuspendNewsletter({
                          id: t.id,
                        }));
                    } catch (e) {
                      var v = t.id.toString(),
                        S = r("getErrorSafe")(e).name;
                      o("WALogger")
                        .ERROR(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[maybeUpdateMsgsAddOns] geosuspend failed (451) ",
                              " ",
                              "",
                            ])),
                          v,
                          S,
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return Number.isSafeInteger(e)
        ? o("WATimeUtils").unixTime() - e >
            o(
              "WAWebNewsletterGatingUtils",
            ).getPullMessageUpdatesThresholdSeconds()
        : !1;
    }
    l.maybeUpdateMsgsAddOns = m;
  },
  98,
);
