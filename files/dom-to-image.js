__d(
  "dom-to-image",
  [],
  function (t, n, r, o, a, i) {
    (function (e) {
      "use strict";
      var t = C(),
        n = b(),
        r = v(),
        o = S(),
        i = { imagePlaceholder: void 0, cacheBust: !1 },
        l = {
          toSvg: s,
          toPng: c,
          toJpeg: d,
          toBlob: m,
          toPixelData: u,
          impl: { fontFaces: r, images: o, util: t, inliner: n, options: {} },
        };
      typeof a != "undefined" ? (a.exports = l) : (e.domtoimage = l);
      function s(e, n) {
        return (
          (n = n || {}),
          p(n),
          Promise.resolve(e)
            .then(function (e) {
              return f(
                e,
                n.filter,
                {
                  maintainHiddenScrollbars: n.maintainHiddenScrollbars,
                  normalizeFontKerning: n.normalizeFontKerning,
                  skipCustomCSSProperties: n.skipCustomCSSProperties === !0,
                },
                !0,
              );
            })
            .then(g)
            .then(h)
            .then(r)
            .then(function (r) {
              return y(r, n.width || t.width(e), n.height || t.height(e));
            })
        );
        function r(e) {
          return (
            n.bgcolor && (e.style.backgroundColor = n.bgcolor),
            n.width && (e.style.width = n.width + "px"),
            n.height && (e.style.height = n.height + "px"),
            n.style &&
              Object.keys(n.style).forEach(function (t) {
                e.style[t] = n.style[t];
              }),
            e
          );
        }
      }
      function u(e, n) {
        return _(e, n || {}).then(function (n) {
          return n.getContext("2d").getImageData(0, 0, t.width(e), t.height(e))
            .data;
        });
      }
      function c(e, t) {
        return _(e, t || {}).then(function (e) {
          return e.toDataURL();
        });
      }
      function d(e, t) {
        return (
          (t = t || {}),
          _(e, t).then(function (e) {
            return e.toDataURL("image/jpeg", t.quality || 1);
          })
        );
      }
      function m(e, n) {
        return _(e, n || {}).then(t.canvasToBlob);
      }
      function p(e) {
        (typeof e.imagePlaceholder == "undefined"
          ? (l.impl.options.imagePlaceholder = i.imagePlaceholder)
          : (l.impl.options.imagePlaceholder = e.imagePlaceholder),
          typeof e.cacheBust == "undefined"
            ? (l.impl.options.cacheBust = i.cacheBust)
            : (l.impl.options.cacheBust = e.cacheBust),
          typeof e.proxyImageURL == "function" &&
            (l.impl.options.proxyImageURL = e.proxyImageURL),
          (l.impl.options.replaceDataUriSvgWithSvgElement =
            !!e.replaceDataUriSvgWithSvgElement),
          (l.impl.options.urlToBase64PromiseCache =
            e.urlToBase64PromiseCache || null),
          (l.impl.options.catchInlineEvents = e.catchInlineEvents));
      }
      function _(e, n) {
        return s(e, n)
          .then(t.makeImage)
          .then(t.delay(100))
          .then(function (t) {
            var n = r(e);
            return (n.getContext("2d").drawImage(t, 0, 0), n);
          });
        function r(e) {
          var r = document.createElement("canvas");
          if (
            ((r.width = n.width || t.width(e)),
            (r.height = n.height || t.height(e)),
            n.bgcolor)
          ) {
            var o = r.getContext("2d");
            ((o.fillStyle = n.bgcolor), o.fillRect(0, 0, r.width, r.height));
          }
          return r;
        }
      }
      function f(e, n, r, o) {
        if (!o && n && !n(e)) return Promise.resolve();
        return Promise.resolve(e)
          .then(a)
          .then(function (t) {
            return i(e, t, n);
          })
          .then(function (t) {
            return l(e, t);
          });
        function a(e) {
          return e instanceof HTMLCanvasElement
            ? t.makeImage(e.toDataURL())
            : e.cloneNode(!1);
        }
        function i(e, n, o) {
          var a = e.childNodes;
          if (a.length === 0) return Promise.resolve(n);
          return i(n, t.asArray(a), o).then(function () {
            return n;
          });
          function i(e, t, n) {
            var o = Promise.resolve();
            return (
              t.forEach(function (t) {
                o = o
                  .then(function () {
                    return f(t, n, r);
                  })
                  .then(function (t) {
                    t && e.appendChild(t);
                  });
              }),
              o
            );
          }
        }
        function l(e, n) {
          if (!(n instanceof Element)) return n;
          return Promise.resolve()
            .then(o)
            .then(a)
            .then(i)
            .then(l)
            .then(function () {
              return n;
            });
          function o() {
            if (
              (o(window.getComputedStyle(e), n.style),
              n.style.overflow === "hidden" &&
                n.style.textOverflow === "ellipsis")
            ) {
              let e = function (e) {
                return parseFloat(e) === parseInt(e)
                  ? e
                  : Math.ceil(parseFloat(e) * 1e3) / 1e3 + "px";
              };
              ((n.style.height = e(n.style.height)),
                (n.style.width = e(n.style.width)));
            }
            r.normalizeFontKerning === !0 &&
              n.style.fontKerning === "auto" &&
              (n.style.fontKerning = "normal");
            function o(e, n) {
              e.cssText
                ? ((n.cssText = e.cssText), (n.font = e.font))
                : o(e, n);
              function o(e, n) {
                var o = r.skipCustomCSSProperties === !0;
                t.asArray(e).forEach(function (t) {
                  (o && t.startsWith("--")) ||
                    n.setProperty(
                      t,
                      e.getPropertyValue(t),
                      e.getPropertyPriority(t),
                    );
                });
              }
            }
          }
          function a() {
            [":before", ":after"].forEach(function (e) {
              o(e);
            });
            function o(r) {
              var o = window.getComputedStyle(e, r),
                a = o.getPropertyValue("content");
              if (a === "" || a === "none") return;
              var i = t.uid();
              n.className = n.className + " " + i;
              var l = document.createElement("style");
              (l.appendChild(s(i, r, o)), n.appendChild(l));
              function s(e, n, r) {
                var o = "." + e + ":" + n,
                  a = r.cssText ? i(r) : l(r);
                return document.createTextNode(o + "{" + a + "}");
                function i(e) {
                  var t = e.getPropertyValue("content");
                  return e.cssText + " content: " + t + ";";
                }
                function l(e) {
                  return t.asArray(e).map(n).join("; ") + ";";
                  function n(t) {
                    return (
                      t +
                      ": " +
                      e.getPropertyValue(t) +
                      (e.getPropertyPriority(t) ? " !important" : "")
                    );
                  }
                }
              }
            }
            (function () {
              if (r.maintainHiddenScrollbars) {
                var o = ":-webkit-scrollbar",
                  a = window.getComputedStyle(e, o);
                if (a && a.display === "none") {
                  var i = t.uid();
                  n.className = n.className + " " + i;
                  var l = document.createElement("style"),
                    s = "." + i + ":" + o;
                  (l.appendChild(
                    document.createTextNode(s + "{ display: none; }"),
                  ),
                    n.appendChild(l));
                }
              }
            })();
          }
          function i() {
            (e instanceof HTMLTextAreaElement && (n.innerHTML = e.value),
              e instanceof HTMLInputElement &&
                n.setAttribute("value", e.value));
          }
          function l() {
            n instanceof SVGElement &&
              (n.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
              n instanceof SVGRectElement &&
                ["width", "height"].forEach(function (e) {
                  var t = n.getAttribute(e);
                  t && n.style.setProperty(e, t);
                }));
          }
        }
      }
      function g(e) {
        return r.resolveAll().then(function (t) {
          var n = document.createElement("style");
          return (
            e.appendChild(n),
            n.appendChild(document.createTextNode(t)),
            e
          );
        });
      }
      function h(e) {
        return o.inlineAll(e).then(function () {
          return e;
        });
      }
      function y(e, t, n) {
        return Promise.resolve(e)
          .then(function (e) {
            return (
              e.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"),
              new XMLSerializer().serializeToString(e)
            );
          })
          .then(function (e) {
            return (
              '<foreignObject x="0" y="0" width="100%" height="100%">' +
              e +
              "</foreignObject>"
            );
          })
          .then(function (e) {
            return (
              '<svg xmlns="http://www.w3.org/2000/svg" width="' +
              t +
              '" height="' +
              n +
              '">' +
              e +
              "</svg>"
            );
          })
          .then(function (e) {
            return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(e);
          });
      }
      function C() {
        return {
          escape: m,
          parseExtension: t,
          mimeType: n,
          dataAsUrl: d,
          isDataUrl: r,
          canvasToBlob: a,
          resolveUrl: i,
          getAndEncode: c,
          uid: s(),
          delay: p,
          asArray: _,
          escapeXhtml: f,
          makeImage: u,
          width: g,
          height: h,
        };
        function e() {
          var e = "application/font-woff",
            t = "image/jpeg";
          return {
            woff: e,
            woff2: e,
            ttf: "application/font-truetype",
            eot: "application/vnd.ms-fontobject",
            png: "image/png",
            jpg: t,
            jpeg: t,
            gif: "image/gif",
            tiff: "image/tiff",
            svg: "image/svg+xml",
          };
        }
        function t(e) {
          var t = /\.([^\.\/]*?)$/g.exec(e);
          return t ? t[1] : "";
        }
        function n(n) {
          var r = t(n).toLowerCase();
          return e()[r] || "";
        }
        function r(e) {
          return e.search(/^(data:)/) !== -1;
        }
        function o(e) {
          return new Promise(function (t) {
            for (
              var n = window.atob(e.toDataURL().split(",")[1]),
                r = n.length,
                o = new Uint8Array(r),
                a = 0;
              a < r;
              a++
            )
              o[a] = n.charCodeAt(a);
            t(new Blob([o], { type: "image/png" }));
          });
        }
        function a(e) {
          return e.toBlob
            ? new Promise(function (t) {
                e.toBlob(t);
              })
            : o(e);
        }
        function i(e, t) {
          var n = document.implementation.createHTMLDocument(),
            r = n.createElement("base");
          n.head.appendChild(r);
          var o = n.createElement("a");
          return (n.body.appendChild(o), (r.href = t), (o.href = e), o.href);
        }
        function s() {
          var e = 0;
          return function () {
            return "u" + t() + e++;
            function t() {
              return (
                "0000" + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)
              ).slice(-4);
            }
          };
        }
        function u(e) {
          return new Promise(function (t, n) {
            var r = new Image();
            ((r.onload = function () {
              t(r);
            }),
              (r.onerror = n),
              (r.src = e));
          });
        }
        function c(e) {
          var t = 3e4;
          l.impl.options.cacheBust &&
            (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
          var n = l.impl.options.urlToBase64PromiseCache,
            r = n && n.get(e);
          if (r) return r;
          var o = new Promise(function (n) {
            var r = new XMLHttpRequest();
            ((r.onreadystatechange = i),
              (r.ontimeout = s),
              (r.responseType = "blob"),
              (r.timeout = t),
              r.open("GET", e, !0),
              r.send());
            var o;
            if (l.impl.options.imagePlaceholder) {
              var a = l.impl.options.imagePlaceholder.split(/,/);
              a && a[1] && (o = a[1]);
            }
            function i() {
              if (r.readyState === 4) {
                if (r.status !== 200) {
                  var t =
                    "cannot fetch resource: " + e + ", status: " + r.status;
                  o ? (t + "", n(o)) : u(t);
                  return;
                }
                var a = new FileReader();
                ((a.onloadend = function () {
                  n(a.result);
                }),
                  a.readAsDataURL(r.response));
              }
            }
            function s() {
              o
                ? n(o)
                : u(
                    "timeout of " +
                      t +
                      "ms occured while fetching resource: " +
                      e,
                  );
            }
            function u(e) {
              n("");
            }
          });
          return (n && n.set(e, o), o);
        }
        function d(e, t) {
          return "data:" + t + ";base64," + e;
        }
        function m(e) {
          return e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
        }
        function p(e) {
          return function (t) {
            return new Promise(function (n) {
              setTimeout(function () {
                n(t);
              }, e);
            });
          };
        }
        function _(e) {
          for (var t = [], n = e.length, r = 0; r < n; r++) t.push(e[r]);
          return t;
        }
        function f(e) {
          return e.replace(/#/g, "%23").replace(/\n/g, "%0A");
        }
        function g(e) {
          var t = y(e, "border-left-width"),
            n = y(e, "border-right-width");
          return e.scrollWidth + t + n;
        }
        function h(e) {
          var t = y(e, "border-top-width"),
            n = y(e, "border-bottom-width");
          return e.scrollHeight + t + n;
        }
        function y(e, t) {
          var n = window.getComputedStyle(e).getPropertyValue(t);
          return parseFloat(n.replace("px", ""));
        }
      }
      function b() {
        var e = /url\(['"]?([^'"]+?)['"]?\)/g;
        return {
          inlineAll: a,
          shouldProcess: n,
          impl: { readUrls: r, inline: o },
        };
        function n(t) {
          return t.search(e) !== -1;
        }
        function r(n) {
          for (var r = [], o; (o = e.exec(n)) !== null; ) r.push(o[1]);
          return r.filter(function (e) {
            return !t.isDataUrl(e);
          });
        }
        function o(e, n, r, o) {
          return Promise.resolve(n)
            .then(function (e) {
              return r ? t.resolveUrl(e, r) : e;
            })
            .then(function (e) {
              return l.impl.options.proxyImageURL
                ? l.impl.options.proxyImageURL(e)
                : e;
            })
            .then(o || t.getAndEncode)
            .then(function (t) {
              return e.replace(a(n), "$1" + t + "$3");
            });
          function a(e) {
            return new RegExp(
              "(url\\(['\"]?)(" + t.escape(e) + ")(['\"]?\\))",
              "g",
            );
          }
        }
        function a(e, t, a) {
          if (i()) return Promise.resolve(e);
          return Promise.resolve(e)
            .then(r)
            .then(function (n) {
              var r = Promise.resolve(e);
              return (
                n.forEach(function (e) {
                  r = r.then(function (n) {
                    return o(n, e, t, a);
                  });
                }),
                r
              );
            });
          function i() {
            return !n(e);
          }
        }
      }
      function v() {
        return { resolveAll: e, impl: { readAll: r } };
        function e() {
          return r(document)
            .then(function (e) {
              return Promise.all(
                e.map(function (e) {
                  return e.resolve();
                }),
              );
            })
            .then(function (e) {
              return e.join("\n");
            });
        }
        function r() {
          return Promise.resolve(t.asArray(document.styleSheets))
            .then(r)
            .then(e)
            .then(function (e) {
              return e.map(o);
            });
          function e(e) {
            return e.filter(function (e) {
              return e.type === CSSRule.FONT_FACE_RULE;
            });
          }
          function r(e) {
            var n = [];
            return (
              e.forEach(function (e) {
                try {
                  t.asArray(e.cssRules || []).forEach(n.push.bind(n));
                } catch (t) {
                  ("" + e.href, t.toString());
                }
              }),
              n
            );
          }
          function o(e) {
            return {
              resolve: function () {
                var t = (e.parentStyleSheet || {}).href;
                return n.inlineAll(e.cssText, t);
              },
              src: function () {
                return e.style.getPropertyValue("src");
              },
            };
          }
        }
      }
      function S() {
        return { inlineAll: r, impl: { newImage: e } };
        function e(e) {
          return { inline: n };
          function n(n) {
            if (t.isDataUrl(e.src)) {
              if (
                e.src.startsWith("data:image/svg+xml") &&
                l.impl.options.replaceDataUriSvgWithSvgElement
              ) {
                var r = decodeURIComponent(e.src.slice(19)),
                  o = new DOMParser(),
                  a = o.parseFromString(r, "image/svg+xml"),
                  i = a.documentElement;
                ((i.className = e.className),
                  Object.assign(i.style, e.style),
                  e.parentElement.replaceChild(i, e));
              }
              return Promise.resolve();
            }
            return Promise.resolve(e.src)
              .then(function (e) {
                return l.impl.options.proxyImageURL
                  ? l.impl.options.proxyImageURL(e)
                  : e;
              })
              .then(n || t.getAndEncode)
              .then(function (t) {
                return new Promise(function (n, r) {
                  ((e.onload = n), (e.onerror = r), (e.src = t));
                });
              })
              .catch(function (e) {
                if (!l.impl.options.catchInlineEvents) throw e;
              });
          }
        }
        function r(o) {
          if (!(o instanceof Element)) return Promise.resolve(o);
          return Promise.all([
            a(o, "background"),
            a(o, "mask-image"),
            a(o, "-webkit-mask-image"),
          ]).then(function () {
            if (o instanceof HTMLImageElement) return e(o).inline();
            if (o instanceof SVGImageElement) {
              var n = new Image();
              return (
                (n.src = o.href && o.href.baseVal),
                e(n)
                  .inline()
                  .then(function () {
                    o.href.baseVal = n.src;
                  })
              );
            } else
              return Promise.all(
                t.asArray(o.childNodes).map(function (e) {
                  return r(e);
                }),
              );
          });
          function a(e, t) {
            var r = e.style.getPropertyValue(t);
            return r
              ? n
                  .inlineAll(r)
                  .then(function (n) {
                    e.style.setProperty(t, n, e.style.getPropertyPriority(t));
                  })
                  .then(function () {
                    return e;
                  })
              : Promise.resolve(e);
          }
        }
      }
    })(this);
  },
  null,
);
