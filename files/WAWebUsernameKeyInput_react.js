__d(
  "WAWebUsernameKeyInput.react",
  ["WAWebKeyboardConstants", "WDSFontTokenStyles", "react", "stylex"],
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
      var n = t.invalidKeyError,
        a = t.numberOfKeyDigits,
        i = t.setInvalidKeyError,
        l = t.setUsernameKeyInput,
        s = t.usernameKeyInput,
        m = c([]),
        p = function (t, r) {
          if ((n && i(!1), /^\d?$/.test(r))) {
            var e = [].concat(s.split(""));
            if (((e[t] = r), l(e.join("")), r && t < a - 1)) {
              var o;
              (o = m.current[t + 1]) == null || o.focus();
            }
          }
        },
        _ = function (t, n) {
          if (
            n.key ===
              o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.BACKSPACE &&
            !s[t] &&
            t > 0
          ) {
            var e;
            (e = m.current[t - 1]) == null || e.focus();
          }
        };
      return u.jsx("div", {
        className: "x78zum5 xrdqr27",
        children: Array.from({ length: a }).map(function (t, a) {
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
                    n ? d.errorKeyInputColor : d.defaultKeyInputColour,
                  ]),
                  {
                    type: "text",
                    inputMode: "numeric",
                    maxLength: 1,
                    value: a <= s.length - 1 ? s[a] : "",
                    onChange: function (t) {
                      return p(a, t.currentTarget.value);
                    },
                    onKeyDown: function (t) {
                      return _(a, t);
                    },
                    ref: function (t) {
                      return (m.current[a] = t);
                    },
                  },
                ),
              ),
            },
            a,
          );
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      return u.jsx("div", {
        className: "x78zum5 xdt5ytf x6s0dn4 xkh2ocl",
        children: u.jsx(m, babelHelpers.extends({}, e)),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
