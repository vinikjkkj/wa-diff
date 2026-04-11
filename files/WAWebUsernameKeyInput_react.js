__d(
  "WAWebUsernameKeyInput.react",
  [
    "WAWebKeyboardConstants",
    "WDSFontTokenStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = {
        input: {
          width: "xh8yej3",
          height: "x1io82uz",
          textAlign: "x2b8uid",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          outlineColor: "xzu5o23",
          $$css: !0,
        },
        defaultKeyInputColour: {
          borderTopColor: "x1pyc6se",
          borderInlineEndColor: "x1mlb2bo",
          borderBottomColor: "x16pkwpw",
          borderInlineStartColor: "xqe4bef",
          $$css: !0,
        },
        errorKeyInputColor: {
          borderTopColor: "x113kvv2",
          borderInlineEndColor: "xce17vl",
          borderBottomColor: "x61tcke",
          borderInlineStartColor: "x1kfnm9f",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(8),
        a = t.invalidKeyError,
        i = t.numberOfKeyDigits,
        l = t.setInvalidKeyError,
        s = t.setUsernameKeyInput,
        m = t.usernameKeyInput,
        p;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = []), (n[0] = p))
        : (p = n[0]);
      var _ = c(p),
        f;
      if (n[1] !== a || n[2] !== i || n[3] !== l || n[4] !== s || n[5] !== m) {
        var g = function (t, n) {
            if ((a && l(!1), /^\d?$/.test(n))) {
              var e = [].concat(m.split(""));
              if (((e[t] = n), s(e.join("")), n && t < i - 1)) {
                var r;
                (r = _.current[t + 1]) == null || r.focus();
              }
            }
          },
          h = function (t, n) {
            if (
              n.key ===
                o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                  .BACKSPACE &&
              !m[t] &&
              t > 0
            ) {
              var e;
              (e = _.current[t - 1]) == null || e.focus();
            }
          },
          y;
        (n[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = { className: "x78zum5 xrdqr27" }), (n[7] = y))
          : (y = n[7]),
          (f = u.jsx(
            "div",
            babelHelpers.extends({}, y, {
              children: Array.from({ length: i }).map(function (t, n) {
                return u.jsx(
                  "div",
                  {
                    className:
                      "x78zum5 x100vrsf xy75621 x1h678fw xv6tirj xdt5ytf x1cy8zhl",
                    children: u.jsx(
                      "input",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props([
                          d.input,
                          o("WDSFontTokenStyles").WDSFontTokenStyles.Body1,
                          a ? d.errorKeyInputColor : d.defaultKeyInputColour,
                        ]),
                        {
                          type: "text",
                          inputMode: "numeric",
                          maxLength: 1,
                          value: n <= m.length - 1 ? m[n] : "",
                          onChange: function (t) {
                            return g(n, t.currentTarget.value);
                          },
                          onKeyDown: function (t) {
                            return h(n, t);
                          },
                          ref: function (t) {
                            return (_.current[n] = t);
                          },
                        },
                      ),
                    ),
                  },
                  n,
                );
              }),
            }),
          )),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = m),
          (n[6] = f));
      } else f = n[6];
      return f;
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = { className: "x78zum5 xdt5ytf x6s0dn4 xkh2ocl" }), (t[0] = n))
        : (n = t[0]);
      var r;
      return (
        t[1] !== e
          ? ((r = u.jsx(
              "div",
              babelHelpers.extends({}, n, {
                children: u.jsx(m, babelHelpers.extends({}, e)),
              }),
            )),
            (t[1] = e),
            (t[2] = r))
          : (r = t[2]),
        r
      );
    }
    l.default = p;
  },
  98,
);
