__d(
  "useWAWebVoipWindowSetup",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebFbtCommon",
    "WAWebKeyboardRun",
    "WAWebKeyboardShortcuts",
    "WAWebPopover.react",
    "WAWebRobotoVariableFontLoadable",
    "WAWebUim",
    "WAWebVoipWindowConstants",
    "asyncToGeneratorRuntime",
    "fbs",
    "react",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = m.useEffect,
      _ = m.useState,
      f = "voip-ui-crash-call-ended";
    function g(e) {
      (e != null ? e : window).dispatchEvent(new Event(f));
    }
    var h = "voip-ui-splash-screen-secondary-text";
    function y(t, a) {
      var i = _(function () {
          return document.createElement("div");
        }),
        l = i[0],
        u = i[1],
        d = r("useWAWebStableCallback")(a);
      return (
        p(
          function () {
            if (!t) return;
            var a = t.logContext,
              i = t.onBeforeUnload,
              u = t.onPageHide,
              m = t.popoverPortalId,
              p = t.preventPageRefresh,
              _ = p === void 0 ? !1 : p,
              g = t.replaceUrl,
              y = t.setDocumentTitle,
              S = t.targetWindow,
              R = function () {
                return L.resolve();
              },
              L = new (o("WAResolvable").Resolvable)(),
              E = function (t) {
                var e = t.key,
                  n =
                    e === "F5" ||
                    (e === "r" && (t.ctrlKey || t.metaKey)) ||
                    (e === "R" && (t.ctrlKey || t.metaKey));
                n && (t.preventDefault(), t.stopPropagation());
              },
              k = function (t) {
                var e = o("WAWebKeyboardShortcuts").getAction(t);
                e && r("WAWebKeyboardRun")(e);
              },
              I = null,
              T = null,
              D = null,
              x = null,
              $ = null;
            function P() {
              return N.apply(this, arguments);
            }
            function N() {
              return (
                (N = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    try {
                      var t = S.document.documentElement;
                      if (
                        (t ||
                          ((t = S.document.createElement("html")),
                          S.document.appendChild(t)),
                        !S.document.head)
                      ) {
                        var p = S.document.createElement("head");
                        t.prepend(p);
                      }
                      y == null || y(S.document);
                      var P = b(S.document);
                      if (!S.document.body) {
                        var N = S.document.createElement("body");
                        t.appendChild(N);
                      }
                      (S.document.body.appendChild(P),
                        document.documentElement
                          .getAttributeNames()
                          .forEach(function (e) {
                            var n;
                            t.setAttribute(
                              e,
                              (n = document.documentElement.getAttribute(e)) !=
                                null
                                ? n
                                : void 0,
                            );
                          }),
                        document.body.getAttributeNames().forEach(function (e) {
                          var t;
                          S.document.body.setAttribute(
                            e,
                            (t = document.body.getAttribute(e)) != null
                              ? t
                              : void 0,
                          );
                        }),
                        S.document.body.classList.add("dark"));
                      var M = document.getElementById(
                          o("WAWebPopover.react").ANCHOR_PORTAL_ID,
                        ),
                        w = v(M, S, function (e) {
                          return ((e.style.overflow = "hidden"), e);
                        });
                      w ||
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: ",
                                ": Could not find popover portal in main page",
                              ])),
                            a,
                          )
                          .sendLogs(
                            "voip: " +
                              a +
                              ": Could not find popover portal in main page",
                          );
                      var A = w != null ? w : {},
                        F = A.parentRoot,
                        O = F === void 0 ? document.createElement("div") : F,
                        B = A.innermostContainer,
                        W = B === void 0 ? document.createElement("div") : B,
                        q = document.createElement("div");
                      ((I = q), (q.id = "app"), q.appendChild(O));
                      var U = document.createElement("div");
                      ((U.id = m),
                        W.appendChild(U),
                        yield o(
                          "WAWebRobotoVariableFontLoadable",
                        ).requireRobotoVariableFont(),
                        document.readyState === "complete"
                          ? L.resolve()
                          : S.addEventListener("load", R),
                        (c || (c = n("Promise")))
                          .allSettled(
                            [].concat(C(document, S.document, a), [L.promise]),
                          )
                          .then(function () {
                            (l.setAttribute(
                              "style",
                              "height: 100%; width: 100%;",
                            ),
                              W.setAttribute(
                                "style",
                                "height: 100%; width: 100%;",
                              ),
                              W.appendChild(l),
                              S.document.body.appendChild(q),
                              ($ = function () {
                                var e = r("fbs")
                                    ._(/*BTDS*/ "Call ended.")
                                    .toString(),
                                  t = S.document.getElementById(h);
                                (t != null && (t.textContent = e),
                                  S.setTimeout(function () {
                                    S.close();
                                  }, 3e3));
                              }),
                              S.addEventListener(f, $),
                              i && S.addEventListener("beforeunload", i),
                              u && S.addEventListener("pagehide", u),
                              d == null || d(S));
                          }),
                        (T = o("WAWebUim").setupUimListeners(S)),
                        _ && S.addEventListener("keydown", E, !0),
                        S.addEventListener("keydown", k),
                        (D = function () {
                          (x != null && window.clearTimeout(x),
                            (x = window.setTimeout(function () {
                              var e = S.outerWidth,
                                t = S.outerHeight,
                                n = o(
                                  "WAWebVoipWindowConstants",
                                ).getEffectiveMinWindowWidth();
                              (e < n ||
                                t <
                                  o("WAWebVoipWindowConstants")
                                    .MIN_WINDOW_HEIGHT) &&
                                S.resizeTo(
                                  Math.max(e, n),
                                  Math.max(
                                    t,
                                    o("WAWebVoipWindowConstants")
                                      .MIN_WINDOW_HEIGHT,
                                  ),
                                );
                            }, 200)));
                        }),
                        S.addEventListener("resize", D));
                      try {
                        S.history.replaceState(
                          null,
                          "",
                          g != null ? g : window.location.origin,
                        );
                      } catch (e) {}
                    } catch (e) {
                      o("WALogger")
                        .ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: ",
                              ": Failed to set up window ",
                              "",
                            ])),
                          a,
                          String(e),
                        )
                        .sendLogs(
                          "voip: " +
                            a +
                            ": Failed to set up window " +
                            String(e),
                        );
                    }
                  },
                )),
                N.apply(this, arguments)
              );
            }
            return (
              P(),
              function () {
                (I && I.remove(),
                  T == null || T(),
                  S.removeEventListener("load", R),
                  i && S.removeEventListener("beforeunload", i),
                  u && S.removeEventListener("pagehide", u),
                  _ && S.removeEventListener("keydown", E, !0),
                  $ && S.removeEventListener(f, $),
                  S.removeEventListener("keydown", k),
                  x != null && window.clearTimeout(x),
                  D && S.removeEventListener("resize", D));
              }
            );
          },
          [t, l, d],
        ),
        l
      );
    }
    function C(e, t, n) {
      var r = [];
      return (
        Array.from(e.styleSheets).forEach(function (a) {
          var i = a;
          if (i.cssRules) {
            var d,
              m = t.createElement("style");
            (Array.from(i.cssRules).forEach(function (t) {
              m.appendChild(e.createTextNode(t.cssText));
            }),
              (d = t.head) == null || d.appendChild(m));
          } else {
            var l;
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ",
                  ": CSS rules not found for stylesheet. Falling back to using href.",
                ])),
              n,
            );
            var s = t.createElement("link");
            ((s.rel = "stylesheet"), (s.href = a.href));
            var c = new (o("WAResolvable").Resolvable)();
            ((s.onload = function () {
              return c.resolve();
            }),
              (s.onerror = function () {
                return c.resolve();
              }),
              r.push(c.promise),
              (l = t.head) == null || l.appendChild(s));
          }
        }),
        r
      );
    }
    function b(e) {
      var t = e.createElement("div");
      ((t.className = "WhatsAppWebSplashScreen/initial_startup"),
        (t.style.cssText =
          'align-items: center; background-color: var(--splashscreen-startup-background); display: flex; flex-direction: column; height: 100%; justify-content: center; left: 0; position: fixed; top: 0; user-select: none; width: 100%; font-family: "Roboto Variable", "Roboto", "Helvetica Neue", "Helvetica", sans-serif;'));
      var n = e.createElement("div");
      ((n.className = "WhatsAppWebSplashScreen/graphic"),
        (n.style.cssText =
          "margin-top: -40px; color: var(--splashscreen-startup-icon);"));
      var o = e.createElement("span"),
        a = e.createElementNS("http://www.w3.org/2000/svg", "svg");
      (a.setAttribute("width", "52"),
        a.setAttribute("height", "52"),
        a.setAttribute("xmlns", "http://www.w3.org/2000/svg"));
      var i = e.createElementNS("http://www.w3.org/2000/svg", "path");
      (i.setAttribute(
        "d",
        "M37.7 31.2c-.6-.4-3.8-2-4.4-2.1-.6-.2-1-.4-1.4.3l-2 2.5c-.4.4-.8.5-1.5.2-.6-.3-2.7-1-5.1-3.2-2-1.7-3.2-3.8-3.6-4.5-.4-.6 0-1 .3-1.3l1-1.1.6-1.1c.2-.4 0-.8 0-1.1l-2-4.8c-.6-1.3-1.1-1-1.5-1.1h-1.2c-.5 0-1.2.1-1.8.8-.5.6-2.2 2.2-2.2 5.3 0 3.2 2.3 6.3 2.6 6.7.3.4 4.6 7 11 9.7l3.7 1.4c1.5.5 3 .4 4 .2 1.3-.1 3.9-1.5 4.4-3 .5-1.5.5-2.8.4-3-.2-.4-.6-.5-1.3-.8M26 47.2c-3.9 0-7.6-1-11-3l-.7-.4-8.1 2L8.4 38l-.6-.8A21.4 21.4 0 0126 4.4a21.3 21.3 0 0121.4 21.4c0 11.8-9.6 21.4-21.4 21.4M44.2 7.6a25.8 25.8 0 00-40.6 31L0 52l13.7-3.6A25.8 25.8 0 0044.3 7.5",
      ),
        i.setAttribute("fill", "currentColor"),
        a.appendChild(i),
        o.appendChild(a),
        n.appendChild(o));
      var l = e.createElement("div");
      ((l.className = "WhatsAppWebSplashScreen/main"),
        (l.style.cssText =
          "margin-top: 20px; font-size: 18px; -webkit-font-smoothing: antialiased; color: var(--splashscreen-primary-title);"),
        (l.textContent = r("WAWebFbtCommon")("WhatsApp").toString()));
      var s = e.createElement("div");
      return (
        (s.id = h),
        (s.className = "WhatsAppWebSplashScreen/secondary"),
        (s.style.cssText =
          "margin-top: 32px; font-size: 14px; -webkit-font-smoothing: antialiased; color: var(--splashscreen-secondary-lighter);"),
        (s.textContent = r("fbs")._(/*BTDS*/ "Moving call here...").toString()),
        t.appendChild(n),
        t.appendChild(l),
        t.appendChild(s),
        t
      );
    }
    function v(e, t, n) {
      if (
        (n === void 0 &&
          (n = function (t) {
            return t;
          }),
        e == null)
      )
        return null;
      for (
        var r = [], o = e == null ? void 0 : e.parentElement;
        o && o !== document.body;
      )
        (r.push(o), (o = o.parentElement));
      var a = document.createElement("div"),
        i = r
          .map(function (e) {
            var r = t.document.importNode(e, !1);
            return r instanceof t.HTMLElement ? n(r) : r;
          })
          .reduce(function (e, t) {
            return (t.appendChild(e), t);
          }, a);
      return { parentRoot: i, innermostContainer: a };
    }
    ((l.onReactVoipUiCrash = g), (l.useVoipWindowSetup = y));
  },
  226,
);
