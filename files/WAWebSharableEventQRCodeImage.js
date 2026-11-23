__d(
  "WAWebSharableEventQRCodeImage",
  ["WALogger", "WAWebSharableEventFailureLogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 2,
      u = 360,
      c = 24,
      d = 60,
      m = 106,
      p = 12,
      _ = 16,
      f = 12,
      g = 22,
      h = 2,
      y = 18,
      C = 16;
    async function b(t, n) {
      var r = t.card,
        a = R(t);
      if (a == null) return null;
      try {
        var i = await Promise.all([
            E(n),
            a.placeholder != null ? k(a.placeholder.icon) : null,
            k(a.logo),
          ]),
          l = i[0],
          s = i[1],
          u = i[2],
          c = document.createElement("canvas"),
          d = c.getContext("2d");
        return d == null
          ? null
          : (v(d, c, r, a, {
              cover: l,
              coverIcon: l == null ? s : null,
              logo: u,
            }),
            await new Promise(function (e) {
              return c.toBlob(e, "image/png");
            }));
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][qr-code] image failed: ",
                "",
              ])),
            o("WAWebSharableEventFailureLogger").describeSharableEventError(t),
          ),
          null
        );
      }
    }
    function v(e, t, n, r, o) {
      var a = getComputedStyle(r.name);
      e.font = a.font;
      var i = D(r.name.textContent, u - 2 * c, function (t) {
          return e.measureText(t).width;
        }),
        l = r.qrCode.width,
        m = o.cover != null || o.coverIcon != null,
        p = m ? d + f : 0,
        h = c + p + i.length * g + y + C + l + c;
      ((t.width = u * s),
        (t.height = h * s),
        e.scale(s, s),
        (e.fillStyle = getComputedStyle(n).backgroundColor),
        $(e, 0, 0, u, h, _),
        o.cover != null
          ? I(e, o.cover, c)
          : o.coverIcon != null &&
            r.placeholder != null &&
            T(e, r.placeholder, o.coverIcon, c));
      var b = c + p;
      ((e.font = a.font),
        (e.textAlign = "center"),
        (e.textBaseline = "top"),
        (e.fillStyle = a.color));
      for (var v of i) (e.fillText(v, u / 2, b), (b += g));
      var R = getComputedStyle(r.subtitle);
      ((e.font = R.font),
        (e.fillStyle = R.color),
        e.fillText(r.subtitle.textContent, u / 2, b),
        (b += y + C),
        S(e, r, o.logo, b));
    }
    function S(e, t, n, r) {
      var o = t.qrCode.width,
        a = (u - o) / 2;
      ((e.imageSmoothingEnabled = !1),
        e.drawImage(t.qrCode, a, r, o, o),
        (e.imageSmoothingEnabled = !0));
      var i = t.logo.getBoundingClientRect().width;
      e.drawImage(n, a + (o - i) / 2, r + (o - i) / 2, i, i);
    }
    function R(e) {
      var t,
        n,
        r = e.qrCode.querySelector("canvas"),
        o = e.qrCode.querySelector("svg");
      return !(r instanceof HTMLCanvasElement) || o == null
        ? null
        : {
            logo: o,
            name: (t = e.name.firstElementChild) != null ? t : e.name,
            placeholder: L(e.cover),
            qrCode: r,
            subtitle:
              (n = e.subtitle.firstElementChild) != null ? n : e.subtitle,
          };
    }
    function L(e) {
      if (e.querySelector("img") != null) return null;
      var t = e.firstElementChild,
        n = t == null ? void 0 : t.querySelector("svg");
      return t != null && n != null ? { circle: t, icon: n } : null;
    }
    async function E(e) {
      if (e == null || e === "") return null;
      try {
        var t = await window.fetch(e);
        return t.ok ? await createImageBitmap(await t.blob()) : null;
      } catch (e) {
        return null;
      }
    }
    async function k(e) {
      var t = e.cloneNode(!0);
      t instanceof Element &&
        (t.setAttribute("color", getComputedStyle(e).color),
        t.setAttribute("xmlns", "http://www.w3.org/2000/svg"));
      var n = new Image();
      return (
        (n.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(new XMLSerializer().serializeToString(t))),
        await n.decode(),
        n
      );
    }
    function I(e, t, n) {
      var r = (u - m) / 2;
      (e.save(), P(e, r, n, m, d, p), e.clip());
      var o = Math.max(m / t.width, d / t.height),
        a = t.width * o,
        i = t.height * o;
      (e.drawImage(t, r + (m - a) / 2, n + (d - i) / 2, a, i), e.restore());
    }
    function T(e, t, n, r) {
      var o = d / 2;
      ((e.fillStyle = getComputedStyle(t.circle).backgroundColor),
        e.beginPath(),
        e.arc(u / 2, r + o, o, 0, 2 * Math.PI),
        e.fill());
      var a = t.icon.getBoundingClientRect().width;
      e.drawImage(n, (u - a) / 2, r + o - a / 2, a, a);
    }
    function D(e, t, n) {
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
        o.length <= h)
      )
        return o;
      var l = r.slice(a[h - 1]).join("");
      return [].concat(o.slice(0, h - 1), [x(l.trim(), t, n)]);
    }
    function x(e, t, n) {
      for (
        var r = Array.from(e.trimEnd());
        r.length > 0 && n(r.join("") + "\u2026") > t;
      )
        r.pop();
      return r.join("") + "\u2026";
    }
    function $(e, t, n, r, o, a) {
      (P(e, t, n, r, o, a), e.fill());
    }
    function P(e, t, n, r, o, a) {
      (e.beginPath(),
        e.moveTo(t + a, n),
        e.arcTo(t + r, n, t + r, n + o, a),
        e.arcTo(t + r, n + o, t, n + o, a),
        e.arcTo(t, n + o, t, n, a),
        e.arcTo(t, n, t + r, n, a),
        e.closePath());
    }
    ((l.renderSharableEventQRCodeImage = b),
      (l.getSharableEventQRCodeCardParts = R),
      (l.wrapSharableEventQRCodeName = D));
  },
  98,
);
