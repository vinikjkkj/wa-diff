__d(
  "WAWebHatchSpacesStream",
  [
    "WALogger",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchSpaceImages",
    "WAWebHatchSpacePreviews",
    "WAWebHatchSpacesDecoder",
    "WAWebHatchSpacesManager",
    "WAWebHatchVmConnection",
    "WAWebHatchVmSubscription",
    "WAWebHatchVmTransport",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 15e3,
      c = new Set([401, 403, 404]),
      d = 0,
      m = "idle",
      p = null,
      _ = null,
      f = !1,
      g = !1,
      h = null,
      y = new Set();
    function C() {
      (N(), d++, d === 1 && R());
      var e = !1;
      return function () {
        e || ((e = !0), d--, d === 0 && $());
      };
    }
    function b() {
      d === 0 || m !== "error" || ($(), R());
    }
    function v() {
      return m;
    }
    function S(e) {
      var t = { listener: e };
      return (
        y.add(t),
        function () {
          y.delete(t);
        }
      );
    }
    function R() {
      if (
        !(p != null || !o("WAWebHatchFrontendGating").isHatchSpaceEnabled())
      ) {
        if (r("WAWebHatchLinkedStatusManager").isUnlinked()) {
          A("unlinked");
          return;
        }
        r("WAWebHatchSpacesManager").hasAppliedSnapshot()
          ? A("loaded")
          : (A("loading"), D());
        var e = new (r("WAWebHatchVmSubscription"))({
          connect: function () {
            return L(e);
          },
          kind: "navigation",
          onEvent: T,
          onResubscribed: r("WAWebNoop"),
          open: function (n, r) {
            return n.openEventSubscription(
              o("WAWebHatchVmTransport").JarvisPaths.NAVIGATION_SUBSCRIBE,
              I(e, r),
            );
          },
        });
        ((p = e), e.start());
      }
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!k(e)) return null;
          var t = yield o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(function () {
              return null;
            });
          return k(e) ? (t == null && P("no_session"), t) : null;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return p !== e
        ? !1
        : o("WAWebHatchFrontendGating").isHatchSpaceEnabled()
          ? r("WAWebHatchLinkedStatusManager").isUnlinked()
            ? ($(), A("unlinked"), !1)
            : !0
          : ($(), m === "loading" && A("error"), !1);
    }
    function I(e, t) {
      return babelHelpers.extends({}, t, {
        onResponse: function (r) {
          if (p === e && c.has(r)) {
            P("status_" + r);
            return;
          }
          t.onResponse(r);
        },
      });
    }
    function T(e) {
      var t = o("WAWebHatchSpacesDecoder").decodeHatchSpacesEvent(
        e.name,
        e.payload,
        e.tsMs,
      );
      t != null &&
        (r("WAWebHatchSpacesManager").applyEvent(t),
        (m === "loading" || m === "error") &&
          r("WAWebHatchSpacesManager").hasAppliedSnapshot() &&
          (x(), A("loaded")));
    }
    function D() {
      (x(),
        (_ = self.setTimeout(function () {
          ((_ = null),
            m === "loading" &&
              (o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-spaces-stream/timeout",
                    ])),
                )
                .sendLogs("hatch-spaces-stream-timeout"),
              A("error")));
        }, u)));
    }
    function x() {
      _ != null && (self.clearTimeout(_), (_ = null));
    }
    function $() {
      var e = p;
      ((p = null), x(), e == null || e.stop());
    }
    function P(e) {
      ($(),
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-spaces-stream/stopped reason=",
                "",
              ])),
            e,
          )
          .sendLogs("hatch-spaces-stream-stopped"),
        A("error"));
    }
    function N() {
      var e, t;
      f ||
        ((f = !0),
        (g = r("WAWebHatchLinkedStatusManager").isLinked()),
        (h =
          g &&
          (e =
            (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
              ? void 0
              : t.channelFbid) != null
            ? e
            : null),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(M));
    }
    function M(e) {
      var t = r("WAWebHatchLinkedStatusManager").getLinkedStatusState();
      if (t === "unlinked")
        ((g = !1),
          (h = null),
          $(),
          r("WAWebHatchSpacesManager").reset(),
          o("WAWebHatchSpacePreviews").clearHatchSpacePreviewRoutes(),
          o("WAWebHatchSpaceImages").clearHatchSpaceImages(),
          A("unlinked"));
      else if (t === "linked") {
        var n;
        w((n = e == null ? void 0 : e.channelFbid) != null ? n : null);
      }
    }
    function w(e) {
      var t = g && e !== h;
      if (((g = !0), (h = e), t))
        ($(),
          r("WAWebHatchSpacesManager").reset(),
          o("WAWebHatchSpacePreviews").clearHatchSpacePreviewRoutes(),
          o("WAWebHatchSpaceImages").clearHatchSpaceImages());
      else if (m !== "unlinked") return;
      d > 0 ? R() : A("idle");
    }
    function A(e) {
      if (m !== e) {
        m = e;
        for (var t of Array.from(y)) t.listener();
      }
    }
    ((l.SPACES_SNAPSHOT_DEADLINE_MS = u),
      (l.retainHatchSpacesStream = C),
      (l.retryHatchSpacesStream = b),
      (l.getHatchSpacesLoadStatus = v),
      (l.subscribeToHatchSpacesLoad = S));
  },
  98,
);
