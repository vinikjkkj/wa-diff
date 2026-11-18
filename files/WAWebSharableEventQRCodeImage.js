__d(
  "WAWebSharableEventQRCodeImage",
  [
    "Promise",
    "WALogger",
    "WAWebSharableEventFailureLogger",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 2,
      c = 360,
      d = 24,
      m = 60,
      p = 106,
      _ = 12,
      f = 16,
      g = 12,
      h = 22,
      y = 2,
      C = 18,
      b = 16;
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = E(t);
          if (a == null) return null;
          try {
            var i = yield (s || (s = n("Promise"))).all([
                I(r),
                a.placeholder != null ? D(a.placeholder.icon) : null,
                D(a.logo),
              ]),
              l = i[0],
              u = i[1],
              c = i[2],
              d = document.createElement("canvas"),
              m = d.getContext("2d");
            return m == null
              ? null
              : (R(m, d, t, a, {
                  cover: l,
                  coverIcon: l == null ? u : null,
                  logo: c,
                }),
                yield new s(function (e) {
                  return d.toBlob(e, "image/png");
                }));
          } catch (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][qr-code] image failed: ",
                    "",
                  ])),
                o("WAWebSharableEventFailureLogger").describeSharableEventError(
                  t,
                ),
              ),
              null
            );
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r, o) {
      var a = getComputedStyle(r.name);
      e.font = a.font;
      var i = N(r.name.textContent, c - 2 * d, function (t) {
          return e.measureText(t).width;
        }),
        l = r.qrCode.width,
        s = o.cover != null || o.coverIcon != null,
        p = s ? m + g : 0,
        _ = d + p + i.length * h + C + b + l + d;
      ((t.width = c * u),
        (t.height = _ * u),
        e.scale(u, u),
        (e.fillStyle = getComputedStyle(n).backgroundColor),
        w(e, 0, 0, c, _, f),
        o.cover != null
          ? $(e, o.cover, d)
          : o.coverIcon != null &&
            r.placeholder != null &&
            P(e, r.placeholder, o.coverIcon, d));
      var y = d + p;
      ((e.font = a.font),
        (e.textAlign = "center"),
        (e.textBaseline = "top"),
        (e.fillStyle = a.color));
      for (var v of i) (e.fillText(v, c / 2, y), (y += h));
      var S = getComputedStyle(r.subtitle);
      ((e.font = S.font),
        (e.fillStyle = S.color),
        e.fillText(r.subtitle.textContent, c / 2, y),
        (y += C + b),
        L(e, r, o.logo, y));
    }
    function L(e, t, n, r) {
      var o = t.qrCode.width,
        a = (c - o) / 2;
      ((e.imageSmoothingEnabled = !1),
        e.drawImage(t.qrCode, a, r, o, o),
        (e.imageSmoothingEnabled = !0));
      var i = t.logo.getBoundingClientRect().width;
      e.drawImage(n, a + (o - i) / 2, r + (o - i) / 2, i, i);
    }
    function E(e) {
      var t = e.querySelector('[data-testid="sharable-event-qr-code"] canvas'),
        n = e.querySelector('[data-testid="sharable-event-qr-code"] svg'),
        r = e.querySelector('[data-testid="sharable-event-qr-code-name"]'),
        o = e.querySelector('[data-testid="sharable-event-qr-code-subtitle"]');
      return !(t instanceof HTMLCanvasElement) ||
        n == null ||
        r == null ||
        o == null
        ? null
        : { logo: n, name: r, placeholder: k(e), qrCode: t, subtitle: o };
    }
    function k(e) {
      var t = e.querySelector(
          '[data-testid="sharable-event-qr-code-cover-placeholder"]',
        ),
        n = t == null ? void 0 : t.querySelector("svg");
      return t != null && n != null ? { circle: t, icon: n } : null;
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null || e === "") return null;
          try {
            var t = yield window.fetch(e);
            return t.ok ? yield createImageBitmap(yield t.blob()) : null;
          } catch (e) {
            return null;
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.cloneNode(!0);
          t instanceof Element &&
            (t.setAttribute("color", getComputedStyle(e).color),
            t.setAttribute("xmlns", "http://www.w3.org/2000/svg"));
          var n = new Image();
          return (
            (n.src =
              "data:image/svg+xml;charset=utf-8," +
              encodeURIComponent(new XMLSerializer().serializeToString(t))),
            yield n.decode(),
            n
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      var r = (c - p) / 2;
      (e.save(), A(e, r, n, p, m, _), e.clip());
      var o = Math.max(p / t.width, m / t.height),
        a = t.width * o,
        i = t.height * o;
      (e.drawImage(t, r + (p - a) / 2, n + (m - i) / 2, a, i), e.restore());
    }
    function P(e, t, n, r) {
      var o = m / 2;
      ((e.fillStyle = getComputedStyle(t.circle).backgroundColor),
        e.beginPath(),
        e.arc(c / 2, r + o, o, 0, 2 * Math.PI),
        e.fill());
      var a = t.icon.getBoundingClientRect().width;
      e.drawImage(n, (c - a) / 2, r + o - a / 2, a, a);
    }
    function N(e, t, n) {
      var r = Array.from(e),
        o = [],
        a = [0],
        i = "";
      if (
        (r.forEach(function (e, r) {
          var l = i + e;
          if (i === "" || n(l) <= t) {
            i = l;
            return;
          }
          var s = e === " " ? -1 : i.lastIndexOf(" ");
          (s > 0
            ? (o.push(i.slice(0, s)), (i = i.slice(s + 1) + e))
            : (o.push(i.trimEnd()), (i = e.trim())),
            a.push(r + 1 - Array.from(i).length));
        }),
        o.push(i),
        o.length <= y)
      )
        return o;
      var l = r.slice(a[y - 1]).join("");
      return [].concat(o.slice(0, y - 1), [M(l.trim(), t, n)]);
    }
    function M(e, t, n) {
      for (
        var r = Array.from(e.trimEnd());
        r.length > 0 && n(r.join("") + "\u2026") > t;
      )
        r.pop();
      return r.join("") + "\u2026";
    }
    function w(e, t, n, r, o, a) {
      (A(e, t, n, r, o, a), e.fill());
    }
    function A(e, t, n, r, o, a) {
      (e.beginPath(),
        e.moveTo(t + a, n),
        e.arcTo(t + r, n, t + r, n + o, a),
        e.arcTo(t + r, n + o, t, n + o, a),
        e.arcTo(t, n + o, t, n, a),
        e.arcTo(t, n, t + r, n, a),
        e.closePath());
    }
    ((l.renderSharableEventQRCodeImage = v),
      (l.wrapSharableEventQRCodeName = N));
  },
  98,
);
