__d(
  "useWAWebDefaultProfileColors",
  [
    "WALogger",
    "WANullthrows",
    "WAWebABProps",
    "WAWebLidMigrationUtils",
    "WAWebThemeContext",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        foreground_light_0: { fill: "xpeijrx", color: "x1n2m9b9", $$css: !0 },
        foreground_light_1: { fill: "xexpjjz", color: "x1kqjlw6", $$css: !0 },
        foreground_light_2: { fill: "x188zirx", color: "xwqu2pk", $$css: !0 },
        foreground_light_3: { fill: "x1t468e5", color: "x1r8uoeu", $$css: !0 },
        foreground_light_4: { fill: "xbc7xj4", color: "xpn0nk7", $$css: !0 },
        foreground_light_5: { fill: "xd9is5k", color: "x13chq93", $$css: !0 },
        foreground_light_6: { fill: "x1kqagn2", color: "x1n05ped", $$css: !0 },
        foreground_light_7: { fill: "xkm4go3", color: "x5e9l22", $$css: !0 },
        foreground_light_8: { fill: "x1srln1p", color: "xvwrcih", $$css: !0 },
        foreground_light_9: { fill: "xanjk8j", color: "xfb0nyn", $$css: !0 },
        background_light_0: { backgroundColor: "x149m7kx", $$css: !0 },
        background_light_1: { backgroundColor: "xskvjhn", $$css: !0 },
        background_light_2: { backgroundColor: "xp7xho8", $$css: !0 },
        background_light_3: { backgroundColor: "x14cgl1q", $$css: !0 },
        background_light_4: { backgroundColor: "x12hqe0l", $$css: !0 },
        background_light_5: { backgroundColor: "x140zg0z", $$css: !0 },
        background_light_6: { backgroundColor: "x10w1jpo", $$css: !0 },
        background_light_7: { backgroundColor: "x1yvm687", $$css: !0 },
        background_light_8: { backgroundColor: "x750p0p", $$css: !0 },
        background_light_9: { backgroundColor: "xeoh7ku", $$css: !0 },
        foreground_dark_0: { fill: "x1bfbhdb", color: "x12yyfci", $$css: !0 },
        foreground_dark_1: { fill: "x93r2cv", color: "xxf7ff0", $$css: !0 },
        foreground_dark_2: { fill: "x5ytfuy", color: "x1xys54w", $$css: !0 },
        foreground_dark_3: { fill: "xuhhb12", color: "xpuqgcd", $$css: !0 },
        foreground_dark_4: { fill: "x1m7lzmn", color: "xupum3x", $$css: !0 },
        foreground_dark_5: { fill: "x44mdgp", color: "x1yo833s", $$css: !0 },
        foreground_dark_6: { fill: "xxedggd", color: "x1l5hh2", $$css: !0 },
        foreground_dark_7: { fill: "x4gg93y", color: "x1cs9g36", $$css: !0 },
        foreground_dark_8: { fill: "x1xt2dww", color: "x446drw", $$css: !0 },
        foreground_dark_9: { fill: "xw0s12w", color: "x1y4xi8", $$css: !0 },
        background_dark_0: { backgroundColor: "x150ih4e", $$css: !0 },
        background_dark_1: { backgroundColor: "xin3ion", $$css: !0 },
        background_dark_2: { backgroundColor: "x1irhbf4", $$css: !0 },
        background_dark_3: { backgroundColor: "x1f4sk58", $$css: !0 },
        background_dark_4: { backgroundColor: "xv9odtk", $$css: !0 },
        background_dark_5: { backgroundColor: "xjvoycj", $$css: !0 },
        background_dark_6: { backgroundColor: "xby4qiw", $$css: !0 },
        background_dark_7: { backgroundColor: "x1ydycr4", $$css: !0 },
        background_dark_8: { backgroundColor: "x1otzlqf", $$css: !0 },
        background_dark_9: { backgroundColor: "x6g3lej", $$css: !0 },
        accent_light_0: { backgroundColor: "x1ugvjbv", $$css: !0 },
        accent_light_1: { backgroundColor: "xc0hbaw", $$css: !0 },
        accent_light_2: { backgroundColor: "xuiuhh6", $$css: !0 },
        accent_light_3: { backgroundColor: "x1u08djq", $$css: !0 },
        accent_light_4: { backgroundColor: "xhw09ix", $$css: !0 },
        accent_light_5: { backgroundColor: "x1cjtxrm", $$css: !0 },
        accent_light_6: { backgroundColor: "xeh0b9z", $$css: !0 },
        accent_light_7: { backgroundColor: "xch5qog", $$css: !0 },
        accent_light_8: { backgroundColor: "xe39q9i", $$css: !0 },
        accent_light_9: { backgroundColor: "xr2cgwq", $$css: !0 },
        accent_dark_0: { backgroundColor: "x15pc0x0", $$css: !0 },
        accent_dark_1: { backgroundColor: "x7g9zlq", $$css: !0 },
        accent_dark_2: { backgroundColor: "xz8tqu9", $$css: !0 },
        accent_dark_3: { backgroundColor: "x1q3ucki", $$css: !0 },
        accent_dark_4: { backgroundColor: "x12bhq1d", $$css: !0 },
        accent_dark_5: { backgroundColor: "x1j4n4e0", $$css: !0 },
        accent_dark_6: { backgroundColor: "x1k99n7x", $$css: !0 },
        accent_dark_7: { backgroundColor: "x1a4nqah", $$css: !0 },
        accent_dark_8: { backgroundColor: "x14qg5qx", $$css: !0 },
        accent_dark_9: { backgroundColor: "xq4q3us", $$css: !0 },
      };
    function c(t) {
      var n = t.user;
      if (t.isUser() && !t.isPSA()) {
        var r = o("WAWebLidMigrationUtils").toLid(t);
        r != null && (n = r.user);
      }
      if (n == null || n.length === 0)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getColorIndexFromWid: user is null or empty, returning fallback color index",
              ])),
          ),
          0
        );
      var a = n.charAt(n.length - 1),
        i = parseInt(a, 10);
      return isNaN(i)
        ? (o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "getColorIndexFromWid: last character is not a digit, returning fallback color index",
              ])),
          ),
          0)
        : i;
    }
    function d(e, t) {
      var n = e % 10;
      return t === "light"
        ? n === 0
          ? {
              background: u.background_light_0,
              foreground: u.foreground_light_0,
              accent: u.accent_light_0,
            }
          : n === 1
            ? {
                background: u.background_light_1,
                foreground: u.foreground_light_1,
                accent: u.accent_light_1,
              }
            : n === 2
              ? {
                  background: u.background_light_2,
                  foreground: u.foreground_light_2,
                  accent: u.accent_light_2,
                }
              : n === 3
                ? {
                    background: u.background_light_3,
                    foreground: u.foreground_light_3,
                    accent: u.accent_light_3,
                  }
                : n === 4
                  ? {
                      background: u.background_light_4,
                      foreground: u.foreground_light_4,
                      accent: u.accent_light_4,
                    }
                  : n === 5
                    ? {
                        background: u.background_light_5,
                        foreground: u.foreground_light_5,
                        accent: u.accent_light_5,
                      }
                    : n === 6
                      ? {
                          background: u.background_light_6,
                          foreground: u.foreground_light_6,
                          accent: u.accent_light_6,
                        }
                      : n === 7
                        ? {
                            background: u.background_light_7,
                            foreground: u.foreground_light_7,
                            accent: u.accent_light_7,
                          }
                        : n === 8
                          ? {
                              background: u.background_light_8,
                              foreground: u.foreground_light_8,
                              accent: u.accent_light_8,
                            }
                          : {
                              background: u.background_light_9,
                              foreground: u.foreground_light_9,
                              accent: u.accent_light_9,
                            }
        : n === 0
          ? {
              background: u.background_dark_0,
              foreground: u.foreground_dark_0,
              accent: u.accent_dark_0,
            }
          : n === 1
            ? {
                background: u.background_dark_1,
                foreground: u.foreground_dark_1,
                accent: u.accent_dark_1,
              }
            : n === 2
              ? {
                  background: u.background_dark_2,
                  foreground: u.foreground_dark_2,
                  accent: u.accent_dark_2,
                }
              : n === 3
                ? {
                    background: u.background_dark_3,
                    foreground: u.foreground_dark_3,
                    accent: u.accent_dark_3,
                  }
                : n === 4
                  ? {
                      background: u.background_dark_4,
                      foreground: u.foreground_dark_4,
                      accent: u.accent_dark_4,
                    }
                  : n === 5
                    ? {
                        background: u.background_dark_5,
                        foreground: u.foreground_dark_5,
                        accent: u.accent_dark_5,
                      }
                    : n === 6
                      ? {
                          background: u.background_dark_6,
                          foreground: u.foreground_dark_6,
                          accent: u.accent_dark_6,
                        }
                      : n === 7
                        ? {
                            background: u.background_dark_7,
                            foreground: u.foreground_dark_7,
                            accent: u.accent_dark_7,
                          }
                        : n === 8
                          ? {
                              background: u.background_dark_8,
                              foreground: u.foreground_dark_8,
                              accent: u.accent_dark_8,
                            }
                          : {
                              background: u.background_dark_9,
                              foreground: u.foreground_dark_9,
                              accent: u.accent_dark_9,
                            };
    }
    function m(e) {
      return (
        e != null &&
        o("WAWebABProps").getABPropConfigValue("wa_web_default_profile_pics")
      );
    }
    function p(e) {
      var t = o("WAWebThemeContext").useTheme(),
        n = t.theme;
      if (!m(e)) return {};
      var a = c(r("WANullthrows")(e));
      return d(a, n);
    }
    function _(e) {
      var t = o("WAWebThemeContext").useTheme(),
        n = t.theme;
      if (!m(e)) return null;
      var a = c(r("WANullthrows")(e));
      return f(a, n);
    }
    function f(e, t) {
      var n = e % 10;
      return t === "light"
        ? n === 0
          ? [0.831372549, 0.164705882, 0.4, 1]
          : n === 1
            ? [0.007843137, 0.494117647, 0.709803922, 1]
            : n === 2
              ? [0.615686275, 0.423529412, 0.17254902, 1]
              : n === 3
                ? [0.368627451, 0.278431373, 0.870588235, 1]
                : n === 4
                  ? [0.007843137, 0.51372549, 0.466666667, 1]
                  : n === 5
                    ? [0.768627451, 0.325490196, 0.176470588, 1]
                    : n === 6
                      ? [0, 0.388235294, 0.796078431, 1]
                      : n === 7
                        ? [0.521568627, 0.333333333, 0.219607843, 1]
                        : n === 8
                          ? [0.721568627, 0.019607843, 0.192156863, 1]
                          : n === 9
                            ? [0.105882353, 0.529411765, 0.333333333, 1]
                            : [0.40000000596, 0.466666668653, 0.505882382393, 1]
        : n === 0
          ? [1, 0.447058824, 0.631372549, 1]
          : n === 1
            ? [0.325490196, 0.741176471, 0.921568627, 1]
            : n === 2
              ? [1, 0.823529412, 0.474509804, 1]
              : n === 3
                ? [0.654901961, 0.568627451, 1, 1]
                : n === 4
                  ? [0.258823529, 0.780392157, 0.721568627, 1]
                  : n === 5
                    ? [0.988235294, 0.592156863, 0.458823529, 1]
                    : n === 6
                      ? [0.325490196, 0.650980392, 0.992156863, 1]
                      : n === 7
                        ? [0.858823529, 0.650980392, 0.521568627, 1]
                        : n === 8
                          ? [0.984313725, 0.31372549, 0.380392157, 1]
                          : n === 9
                            ? [0.145098039, 0.82745098, 0.4, 1]
                            : [
                                0.525490224361, 0.588235318661, 0.627451002598,
                                1,
                              ];
    }
    ((l.isDefaultProfileColorsEnabledForWid = m),
      (l.useDefaultProfileColors = p),
      (l.useDefaultProfileColorRGB = _));
  },
  98,
);
