__d(
  "WAWebPhoneNumberInput.react",
  [
    "WAIsoToCc",
    "WANullthrows",
    "WAWebClassnames",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebUA",
    "WAWebUISpacing",
    "WDSTextField.react",
    "react",
    "stylex",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = {
        phoneNumberText: {
          fontSize: "x1jchvi3",
          fontVariantNumeric: "xss6m8b",
          $$css: !0,
        },
        input: {
          position: "x1n2onr6",
          color: "xy9n6vp",
          zIndex: "x1n327nk",
          width: "xh8yej3",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          backgroundColor: "xjbqb8w",
          ":focus_outline": "x1uvtmcs",
          $$css: !0,
        },
      };
    function f(t) {
      var n = t.ariaLabel,
        a = t.countryCodeIso,
        i = t.errorMessage,
        l = t.errorMessageDOMId,
        s = t.errorShown,
        c = t.icon,
        f = t.onBlur,
        h = t.onChange,
        y = t.onEnter,
        C = t.onFocus,
        b = t.phoneNumberWithoutCountryPrefix,
        v = t.ref,
        S = t.showCountryPrefix,
        R = S === void 0 ? !0 : S,
        L = t.theme,
        E = L === void 0 ? "default" : L,
        k = E === "wds",
        I = p(null),
        T = I[0],
        D = I[1],
        x = m(null),
        $ = r("useMergeRefs")(v, x),
        P = p(!0),
        N = P[0],
        M = P[1],
        w = a == null ? null : r("WAIsoToCc")[a],
        A = o(
          "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
        ).formatPhoneNumberInput({
          countryCodeIso: a,
          phoneNumberWithoutCountryCode: b != null ? b : "",
        }),
        F = r("WANullthrows")(
          A,
          "Unexpected null phone number format result, likely because of invalid country code",
        ),
        O = F.formattedInputValue,
        B = F.placeholder,
        W = R
          ? o(
              "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
            ).getFullFormattedInputValue(N, w, O)
          : O;
      d(
        function () {
          var e = null;
          if (T != null)
            if (T.shouldPositionNextToDigit) {
              var t = Array.from(W.matchAll(/\d/g));
              t.length > T.selectionStart && (e = t[T.selectionStart].index);
            } else e = T.selectionStart;
          (e != null &&
            x.current instanceof HTMLInputElement &&
            x.current.setSelectionRange(e, e),
            D(null));
        },
        [T, W],
      );
      var q = function (t) {
          var e = t.target,
            n = e.value,
            r = e.selectionStart,
            i = R ? n : "" + (w != null ? w : "") + n,
            l = o(
              "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
            ).cleanPhoneNumberInputValue(i),
            s = l.countryCodeIso,
            u = l.phoneNumberWithoutCountryCode;
          if (s === a && u === b)
            D({ selectionStart: r, shouldPositionNextToDigit: !1 });
          else {
            var c,
              d = o(
                "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
              ).cleanPhoneNumberInputValue(n.substr(0, r)),
              m = d.fullRawPhoneNumber;
            D({
              selectionStart:
                R && w != null && m.length === 0
                  ? (c = w == null ? void 0 : w.toString().length) != null
                    ? c
                    : 0
                  : m.length,
              shouldPositionNextToDigit: !0,
            });
          }
          (s == null ? M(n.includes("+")) : M(!0), h(s, u));
        },
        U = function () {
          (D({ selectionStart: W.length, shouldPositionNextToDigit: !1 }),
            C == null || C());
        };
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: { className: "x1n2onr6" },
            1: { className: "x1n2onr6 xh8yej3" },
          }[!!k << 0],
          {
            children: u.jsx("form", {
              onSubmit: function (t) {
                (t.preventDefault(), y == null || y());
              },
              children: k
                ? u.jsx(r("WDSTextField.react"), {
                    ref: $,
                    testid: void 0,
                    label: n,
                    prefix: c != null ? c : void 0,
                    error: s,
                    errorText: i,
                    value: W,
                    onChange: q,
                    onFocus: U,
                    onBlur: f,
                  })
                : u.jsxs(u.Fragment, {
                    children: [
                      u.jsx(g, { formattedInputValue: W, placeholder: B }),
                      u.jsx("input", {
                        ref: $,
                        dir: "ltr",
                        "data-testid": void 0,
                        "aria-label": n,
                        "aria-describedby": s ? l : "",
                        "aria-required": "true",
                        "aria-invalid": s ? "true" : "false",
                        className: o(
                          "WAWebClassnames",
                        ).classnamesConvertMeToStylexPlease(
                          "selectable-text",
                          (e || (e = r("stylex")))(
                            _.input,
                            _.phoneNumberText,
                            o("WAWebUISpacing").uiPadding.all0,
                          ),
                        ),
                        type: "text",
                        value: W,
                        onChange: q,
                        onFocus: U,
                        onBlur: f,
                      }),
                    ],
                  }),
            }),
          },
        ),
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.formattedInputValue,
        n = e.placeholder,
        r = n.split(/(_+)/).map(function (e, t) {
          var n = t % 2 === 1;
          return u.jsx(
            "span",
            babelHelpers.extends(
              {},
              {
                0: {},
                2: { className: "x1rg5ohu x1qcr5yj xahfe03" },
                1: { className: "x1rg5ohu xtf6cww xkivrog" },
                3: { className: "x1rg5ohu xtf6cww xkivrog" },
              }[
                (!!(n && o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.WINDOWS) <<
                  1) |
                  (!!(n && o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC) <<
                    0)
              ],
              { children: e },
            ),
            t + ":" + e,
          );
        });
      return u.jsxs("div", {
        className:
          "x10l6tqk xs7f9wi xu96u03 xiqmkuo x126k92a x87ps6o x1jchvi3 xss6m8b",
        "aria-hidden": "true",
        children: [u.jsx("span", { className: "x19co3pv", children: t }), r],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
