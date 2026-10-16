__d(
  "WAWebHatchSpacesStream",
  [
    "WALogger",
    "WAWebHatchFilesState",
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
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 15e3,
      d = 15e3,
      m = new Set([401, 403, 404]),
      p = 0,
      _ = "idle",
      f = null,
      g = null,
      h = o("WAWebHatchFilesState").HATCH_FILES_INITIAL_STATE,
      y = !1,
      C = null,
      b = null,
      v = !1,
      S = !1,
      R = null,
      L = new Set(),
      E = new Set();
    function k() {
      (J(), p++, p === 1 && M());
      var e = !1;
      return function () {
        e || ((e = !0), p--, p === 0 && X());
      };
    }
    function I() {
      p === 0 || _ !== "error" || (X(), M());
    }
    function T() {
      return _;
    }
    function D() {
      return h.files;
    }
    function x(e) {
      var t;
      return (t = h.spaceCapabilities.get(e)) != null ? t : null;
    }
    function $() {
      return y;
    }
    function P(e) {
      return re(L, e);
    }
    function N(e) {
      return re(E, e);
    }
    function M() {
      if (
        !(f != null || !o("WAWebHatchFrontendGating").isHatchSpaceEnabled())
      ) {
        if (r("WAWebHatchLinkedStatusManager").isUnlinked()) {
          ne("unlinked");
          return;
        }
        r("WAWebHatchSpacesManager").hasAppliedSnapshot()
          ? ne("loaded")
          : (ne("loading"), G());
        var e = new (r("WAWebHatchVmSubscription"))({
          connect: function () {
            return A(e);
          },
          kind: "navigation",
          onEvent: U,
          onResubscribed: r("WAWebNoop"),
          open: function (n, r) {
            return n.openEventSubscription(
              o("WAWebHatchVmTransport").JarvisPaths.NAVIGATION_SUBSCRIBE,
              W(e, r, function (e) {
                return Y("status_" + e);
              }),
            );
          },
        });
        ((f = e), e.start(), w());
      }
    }
    function w() {
      h.files == null && (y && ((y = !1), oe(E)), j());
      var e = new (r("WAWebHatchVmSubscription"))({
        connect: function () {
          return A(e);
        },
        kind: "artifacts",
        onEvent: V,
        onResubscribed: function () {
          return H(o("WAWebHatchFilesState").dropHatchFilesPendingSnapshot(h));
        },
        open: function (n, r) {
          return n.openEventSubscription(
            o("WAWebHatchVmTransport").JarvisPaths.ARTIFACTS_SUBSCRIBE,
            W(e, r, q),
          );
        },
      });
      ((g = e), e.start());
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!O(e)) return null;
          var t = yield o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(o("WAWebNullFunc").returnNull);
          return O(e) ? (t == null && Y("no_session"), t) : null;
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B(e)
        ? o("WAWebHatchFrontendGating").isHatchSpaceEnabled()
          ? r("WAWebHatchLinkedStatusManager").isUnlinked()
            ? (X(), ne("unlinked"), !1)
            : !0
          : (X(), _ === "loading" && ne("error"), !1)
        : !1;
    }
    function B(e) {
      return e === f || e === g;
    }
    function W(e, t, n) {
      return babelHelpers.extends({}, t, {
        onResponse: function (o) {
          if (B(e) && m.has(o)) {
            n(o);
            return;
          }
          t.onResponse(o);
        },
      });
    }
    function q(t) {
      var n = g;
      ((g = null),
        n == null || n.stop(),
        Q(),
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-spaces-stream/library-stopped reason=status_",
                "",
              ])),
            t,
          )
          .sendLogs("hatch-spaces-stream-library-stopped"));
    }
    function U(e) {
      var t = o("WAWebHatchSpacesDecoder").decodeHatchSpacesEvent(
        e.name,
        e.payload,
        e.tsMs,
      );
      t != null &&
        (r("WAWebHatchSpacesManager").applyEvent(t),
        (_ === "loading" || _ === "error") &&
          r("WAWebHatchSpacesManager").hasAppliedSnapshot() &&
          (z(), ne("loaded")));
    }
    function V(e) {
      (H(o("WAWebHatchFilesState").applyHatchFilesEvent(h, e.name, e.payload)),
        h.files != null && Q());
    }
    function H(e) {
      var t =
        e.files !== h.files || e.spaceCapabilities !== h.spaceCapabilities;
      ((h = e), t && oe(E));
    }
    function G() {
      (z(),
        (C = self.setTimeout(function () {
          ((C = null),
            _ === "loading" &&
              (o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-spaces-stream/timeout",
                    ])),
                )
                .sendLogs("hatch-spaces-stream-timeout"),
              ne("error")));
        }, c)));
    }
    function z() {
      C != null && (self.clearTimeout(C), (C = null));
    }
    function j() {
      (K(),
        (b = self.setTimeout(function () {
          ((b = null), Q());
        }, d)));
    }
    function K() {
      b != null && (self.clearTimeout(b), (b = null));
    }
    function Q() {
      (K(), y || ((y = !0), oe(E)));
    }
    function X() {
      var e = f,
        t = g;
      ((f = null),
        (g = null),
        z(),
        K(),
        e == null || e.stop(),
        t == null || t.stop());
    }
    function Y(e) {
      (X(),
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-spaces-stream/stopped reason=",
                "",
              ])),
            e,
          )
          .sendLogs("hatch-spaces-stream-stopped"),
        ne("error"));
    }
    function J() {
      var e, t;
      v ||
        ((v = !0),
        (S = r("WAWebHatchLinkedStatusManager").isLinked()),
        (R =
          S &&
          (e =
            (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
              ? void 0
              : t.channelFbid) != null
            ? e
            : null),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(Z));
    }
    function Z(e) {
      var t = r("WAWebHatchLinkedStatusManager").getLinkedStatusState();
      if (t === "unlinked")
        ((S = !1),
          (R = null),
          X(),
          r("WAWebHatchSpacesManager").reset(),
          te(),
          o("WAWebHatchSpacePreviews").clearHatchSpacePreviewRoutes(),
          o("WAWebHatchSpaceImages").clearHatchSpaceImages(),
          ne("unlinked"));
      else if (t === "linked") {
        var n;
        ee((n = e == null ? void 0 : e.channelFbid) != null ? n : null);
      }
    }
    function ee(e) {
      var t = S && e !== R;
      if (((S = !0), (R = e), t))
        (X(),
          r("WAWebHatchSpacesManager").reset(),
          te(),
          o("WAWebHatchSpacePreviews").clearHatchSpacePreviewRoutes(),
          o("WAWebHatchSpaceImages").clearHatchSpaceImages());
      else if (_ !== "unlinked") return;
      p > 0 ? M() : ne("idle");
    }
    function te() {
      ((h = o("WAWebHatchFilesState").HATCH_FILES_INITIAL_STATE),
        (y = !1),
        oe(E));
    }
    function ne(e) {
      _ !== e && ((_ = e), oe(L));
    }
    function re(e, t) {
      var n = { listener: t };
      return (
        e.add(n),
        function () {
          e.delete(n);
        }
      );
    }
    function oe(e) {
      for (var t of Array.from(e)) t.listener();
    }
    ((l.SPACES_SNAPSHOT_DEADLINE_MS = c),
      (l.LIBRARY_SNAPSHOT_DEADLINE_MS = d),
      (l.retainHatchSpacesStream = k),
      (l.retryHatchSpacesStream = I),
      (l.getHatchSpacesLoadStatus = T),
      (l.getHatchLibraryFiles = D),
      (l.getHatchSpaceCapabilities = x),
      (l.isHatchLibrarySettled = $),
      (l.subscribeToHatchSpacesLoad = P),
      (l.subscribeToHatchLibrary = N),
      (l.watchHatchSpacesLinkedStatus = J));
  },
  98,
);
