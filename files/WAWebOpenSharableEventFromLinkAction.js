__d(
  "WAWebOpenSharableEventFromLinkAction",
  [
    "WALogger",
    "WAWebJidToWid",
    "WAWebOpenSharableEventInviteNotSupportedModalAction",
    "WAWebOpenSharableEventPageAction",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventLinkDialogs.react",
    "WAWebSharableEventLinkPreview",
    "WAWebSharableEventLinkPreviewJob",
    "WAWebSharableEventPageSource",
    "WAWebSharableEventServerError",
    "WAWebSharableEventViewerState",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 300,
      c = 0,
      d = null;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (
            !o(
              "WAWebSharableEventGatingUtils",
            ).isEventsV2OnCompanionEnabledForAction("open-link")
          ) {
            o(
              "WAWebOpenSharableEventInviteNotSupportedModalAction",
            ).openSharableEventInviteNotSupportedModal();
            return;
          }
          var n = ++c;
          (t = d) == null || t.close();
          var r = h(function () {
            c === n && c++;
          });
          d = r;
          var a;
          try {
            a = yield o(
              "WAWebSharableEventLinkPreviewJob",
            ).fetchSharableEventLinkPreview(e);
          } catch (t) {
            if ((r.close(), c !== n)) return;
            f(e, t);
            return;
          }
          (r.close(), c === n && _(a, e));
        })),
        p.apply(this, arguments)
      );
    }
    function _(t, n) {
      var r = t.event,
        a = t.hasViewerInvitation,
        i =
          r.creatorLid != null &&
          o("WAWebSharableEventViewerState").isSharableEventHostedByViewer(
            o("WAWebJidToWid").lidUserJidToUserLid(r.creatorLid),
          );
      (!a &&
        !i &&
        o("WAWebSharableEventLinkPreview").showSharableEventLinkPreview(t, n),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event][open-link] opening eventId=",
              " invited=",
              "",
            ])),
          r.eventId,
          String(a || i),
        ),
        o("WAWebOpenSharableEventPageAction").openSharableEventInEventsHome(
          r.eventId,
          {
            source: o("WAWebSharableEventPageSource").SharableEventPageSource
              .EventLink,
          },
        ));
    }
    function f(e, t) {
      var n = o("WAWebSharableEventServerError").getSharableEventError(t),
        r = n.kind;
      if (g(r)) {
        (o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event][open-link] link unavailable kind=",
              "",
            ])),
          r,
        ),
          o(
            "WAWebSharableEventLinkDialogs.react",
          ).openSharableEventLinkUnavailableDialog());
        return;
      }
      (o("WAWebSharableEventFailureLogger").logSharableEventFailure(
        "open-link",
        t,
      ),
        o(
          "WAWebSharableEventLinkDialogs.react",
        ).openSharableEventLinkFailedDialog(function () {
          m(e);
        }));
    }
    function g(e) {
      return (
        e ===
          o("WAWebSharableEventServerError").SharableEventErrorKind
            .Unavailable ||
        e ===
          o("WAWebSharableEventServerError").SharableEventErrorKind
            .Validation ||
        e ===
          o("WAWebSharableEventServerError").SharableEventErrorKind.Unauthorized
      );
    }
    function h(e) {
      var t = !1,
        n = self.setTimeout(function () {
          ((t = !0),
            o(
              "WAWebSharableEventLinkDialogs.react",
            ).openSharableEventLinkLoadingDialog(function () {
              ((t = !1), o("WDSDialogBridge").closeWDSDialog(), e());
            }));
        }, u);
      return {
        close: function () {
          (self.clearTimeout(n),
            t && ((t = !1), o("WDSDialogBridge").closeWDSDialog()));
        },
      };
    }
    l.openSharableEventFromLink = m;
  },
  98,
);
