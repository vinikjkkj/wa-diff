__d(
  "WAWebCanonicalDebug.react",
  [
    "CurrentUser",
    "WAWebCanonicalGating",
    "WAWebCanonicalTokenExchange",
    "WAWebCanonicalTokenRefreshJob",
    "WAWebCanonicalUserValidQuery",
    "WAWebCanonicalUtils",
    "WAWebFlex.react",
    "WAWebMdDebugSettingStyles",
    "WAWebSpinner.react",
    "WAWebStopEvent",
    "WDSButton.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = 3e4;
    function g() {
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            o("WAWebMdDebugSettingStyles").styles.settingItem,
          ),
          {
            children: u.jsxs("div", { children: [u.jsx(h, {}), u.jsx(y, {})] }),
          },
        ),
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      var e,
        t = o("WAWebCanonicalTokenExchange").getTokenCreationState(),
        n =
          t === o("WAWebCanonicalTokenExchange").TokenCreationState.IDLE
            ? "IDLE"
            : t ===
                o("WAWebCanonicalTokenExchange").TokenCreationState.IN_PROGRESS
              ? "IN_PROGRESS"
              : t ===
                  o("WAWebCanonicalTokenExchange").TokenCreationState.PRESENT
                ? "PRESENT (Reload needed)"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })(),
        a = o("WAWebCanonicalTokenRefreshJob").getNewRequestCooldownSeconds(),
        i = a != null ? Math.ceil(a / 60) + "m remaining" : "none",
        l = [
          [
            "Canonical VC Present",
            o("WAWebCanonicalUtils").isCurrentUserLoggedIn(),
          ],
          [
            "User ID",
            (e = r("CurrentUser").getPossiblyNonFacebookUserID()) != null
              ? e
              : "null",
          ],
          ["App ID", R(r("CurrentUser").getAppID())],
          ["Token State", n],
          [
            "Reload Pending",
            o("WAWebCanonicalUtils").isCanonicalAppReloadPending(),
          ],
          ["Nonce Request Cooldown", i],
        ],
        s = [
          ["Canonical Enabled", o("WAWebCanonicalGating").isCanonicalEnabled()],
          [
            "Token Recovery Enabled",
            o("WAWebCanonicalGating").isCanonicalRecoveryEnabled(),
          ],
          [
            "Reload on Pairing",
            o("WAWebCanonicalGating").isCanonicalAppReloadEnabled(),
          ],
          [
            "Reload on Recovery",
            o("WAWebCanonicalGating").isCanonicalRecoveryAppReloadEnabled(),
          ],
        ];
      return u.jsxs(u.Fragment, {
        children: [
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: E.section,
            children: [
              u.jsx(r("WDSText.react"), {
                type: "Headline2",
                colorName: "contentDefault",
                children: "State",
              }),
              u.jsx(C, { rows: l }),
            ],
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: E.section,
            children: [
              u.jsx(r("WDSText.react"), {
                type: "Headline2",
                colorName: "contentDefault",
                children: "Gating",
              }),
              u.jsx(C, { rows: s }),
            ],
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      var e = _("idle"),
        t = e[0],
        a = e[1],
        i = _("idle"),
        l = i[0],
        s = i[1],
        c = _(null),
        g = c[0],
        h = c[1],
        y = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            a("validating");
            var e = yield o(
              "WAWebCanonicalUserValidQuery",
            ).fetchCanonicalUserValid();
            a(e);
          }),
          [],
        ),
        C = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (s("sending"), h(null));
            try {
              (o("WAWebCanonicalUtils").setDebugForceTokenRefresh(!0),
                yield o(
                  "WAWebCanonicalTokenRefreshJob",
                ).requestNonceFromPrimary(),
                s("awaiting_response"),
                self.setTimeout(function () {
                  s(function (e) {
                    return e === "awaiting_response" ? "timed_out" : e;
                  });
                }, f));
            } catch (e) {
              (o("WAWebCanonicalUtils").setDebugForceTokenRefresh(!1),
                s("idle"),
                h(String(e)));
            }
          }),
          [],
        ),
        S = p(null);
      m(
        function () {
          if (l !== "awaiting_response") {
            S.current != null &&
              (self.clearInterval(S.current), (S.current = null));
            return;
          }
          return (
            (S.current = self.setInterval(function () {
              o("WAWebCanonicalTokenExchange").getTokenCreationState() ===
                o("WAWebCanonicalTokenExchange").TokenCreationState.PRESENT &&
                s("received");
            }, 500)),
            function () {
              S.current != null &&
                (self.clearInterval(S.current), (S.current = null));
            }
          );
        },
        [l],
      );
      var R = t !== "idle" && t !== "validating";
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: E.section,
        children: [
          u.jsx(r("WDSText.react"), {
            type: "Headline2",
            colorName: "contentDefault",
            children: "Actions",
          }),
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: E.actionHeader,
            children: [
              u.jsx(r("WDSButton.react"), {
                onPress: function () {
                  return void y();
                },
                loading: t === "validating",
                label: "Validate Session",
              }),
              u.jsx(r("WDSButton.react"), {
                disabled: l === "sending" || l === "awaiting_response",
                onPress: function () {
                  return void C();
                },
                label: "Request New Token",
              }),
              l === "received" &&
                u.jsx(r("WDSButton.react"), {
                  onPress: L,
                  label: "Reload App",
                }),
            ],
          }),
          R &&
            u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: b(t),
              children: v(t),
            }),
          l === "sending" &&
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: E.spinnerRow,
              children: [
                u.jsx(o("WAWebSpinner.react").Spinner, { size: 16 }),
                u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  children: "Sending nonce request...",
                }),
              ],
            }),
          l === "awaiting_response" &&
            u.jsxs("div", {
              className:
                "x1c7u0tx x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xbrszos xea3l6g x18isctg x2q3nzr x78zum5 xdt5ytf x129bwdz",
              children: [
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: E.spinnerRow,
                  children: [
                    u.jsx(o("WAWebSpinner.react").Spinner, { size: 16 }),
                    u.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDefault",
                      children: "Waiting for primary to respond with nonce...",
                    }),
                  ],
                }),
                u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDeemphasized",
                  children:
                    "Open your WhatsApp primary app (phone) to complete this request.",
                }),
              ],
            }),
          l === "timed_out" &&
            u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "secondaryNegative",
              children:
                "Primary app didn't return the token. Try again with the primary app open.",
            }),
          g != null &&
            l !== "timed_out" &&
            u.jsxs(r("WDSText.react"), {
              type: "Body1",
              colorName: "secondaryNegative",
              children: ["Error: ", g],
            }),
          l === "received" &&
            u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "secondaryPositive",
              children: "Token received. Reload the app to apply.",
            }),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.rows;
      return u.jsx("div", {
        className:
          "xh8yej3 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz xbrszos xea3l6g x18isctg x2q3nzr x6ikm8r x10wlt62 xrlsmeg",
        children: t.map(function (e, t) {
          var n = e[0],
            a = e[1],
            i = typeof a == "boolean" ? String(a) : a;
          return u.jsxs(
            o("WAWebFlex.react").FlexRow,
            {
              xstyle: [E.tableRow, t % 2 === 0 && E.tableRowAlt],
              children: [
                u.jsx("div", {
                  className:
                    "x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 x1hx0egp x1jzhcrs x1ncir08 x2lah0s x1lun4ml x18b5jzi xbogo7e",
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body1Emphasized",
                    colorName: "contentDefault",
                    children: n,
                  }),
                }),
                u.jsx("div", {
                  className:
                    "x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 x1hx0egp x1iyjqo2",
                  onPointerDown: o("WAWebStopEvent").stopPropagation,
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: S(a),
                    children: i,
                  }),
                }),
              ],
            },
            n,
          );
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      return e === "valid"
        ? "secondaryPositive"
        : e === "invalid" || e === "error"
          ? "secondaryNegative"
          : "contentDefault";
    }
    function v(e) {
      return e === "valid"
        ? "Session is valid"
        : e === "invalid"
          ? "Session is invalid (logged out)"
          : e === "error"
            ? "Validation failed (request error)"
            : "";
    }
    function S(e) {
      return typeof e != "boolean"
        ? "contentDefault"
        : e
          ? "secondaryPositive"
          : "secondaryNegative";
    }
    function R(e) {
      if (e == null) return String(e);
      var t = Number(e),
        n =
          t === 0x97e965c4439a
            ? "WHATSAPP_WEB"
            : t === 0x7e36f3fcc43bc
              ? "WWW_COMET"
              : "OTHER";
      return n + " (" + e + ")";
    }
    function L() {
      self.location.reload();
    }
    var E = {
      section: { rowGap: "x1qvou4u", marginBottom: "x1ua1l7f", $$css: !0 },
      tableRow: {
        borderBottomWidth: "xso031l",
        borderBottomStyle: "x1q0q8m5",
        borderBottomColor: "x120ee7l",
        $$css: !0,
      },
      tableRowAlt: { backgroundColor: "x1c7u0tx", $$css: !0 },
      actionHeader: { alignItems: "x6s0dn4", columnGap: "x1s70e7g", $$css: !0 },
      spinnerRow: { alignItems: "x6s0dn4", columnGap: "x1s70e7g", $$css: !0 },
    };
    l.default = g;
  },
  98,
);
