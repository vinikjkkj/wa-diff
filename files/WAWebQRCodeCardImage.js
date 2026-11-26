__d(
  "WAWebQRCodeCardImage",
  ["WABidi", "WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 2,
      u = 360,
      c = 24,
      d = u - 2 * c,
      m = 16,
      p = 12,
      _ = 22,
      f = 2,
      g = 18,
      h = 16,
      y = 16,
      C = 3,
      b = 4,
      v = 36,
      S = 16 / 9,
      R = 40,
      L = 48,
      E = {
        name: { fontSize: null, lineHeight: _ },
        subtitle: { fontSize: null, lineHeight: g },
      },
      k = {
        name: { fontSize: 24, lineHeight: 30 },
        subtitle: { fontSize: 16, lineHeight: 22 },
      },
      I = { blur: 20, color: "rgba(0, 0, 0, 0.35)", offsetY: 20 };
    async function T(t, n) {
      var a = n.backdrop,
        i = n.footer,
        l = n.loadPicture,
        s = t.card,
        u = F(t);
      if (u == null) return null;
      try {
        var c = await Promise.all([l(), O(u.logo)]),
          d = c[0],
          m = c[1],
          p = document.createElement("canvas"),
          _ = p.getContext("2d");
        return _ == null
          ? null
          : (D(_, p, s, u, { backdrop: a, footer: i, logo: m, picture: d }),
            await new Promise(function (e) {
              return p.toBlob(e, "image/png");
            }));
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[qr-code-card] image failed",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          null
        );
      }
    }
    function D(e, t, n, r, o) {
      var a,
        i = o.backdrop,
        l = o.footer,
        s = o.picture,
        u = function (n) {
          return e.measureText(n).width;
        },
        c = i != null ? k : E,
        m = N(r.name, c.name),
        p = N(r.subtitle, c.subtitle);
      e.font = m.font;
      var _ = V(r.name.textContent, d, u);
      e.font = p.font;
      var f = l != null ? V(l, d, u, { maxLines: C }) : [],
        g = f.length * p.lineHeight,
        h = r.qrCode.width,
        y = $({
          footerHeight: g,
          hasBackdrop: i != null,
          picture: s,
          qrCodeSize: h,
          textHeight: _.length * m.lineHeight + p.lineHeight,
        });
      (i != null
        ? x(e, t, n, {
            cardHeight: y.cardHeight,
            color: i.color,
            contentHeight: y.footerTop + g,
            overhang: y.overhang,
          })
        : P(e, t, n, y.cardHeight),
        s != null && M(e, n, s, y.isPictureOverlapping),
        (e.textAlign = "center"),
        (e.textBaseline = "top"),
        (e.font = m.font),
        (e.fillStyle = m.color));
      var b = w(e, _, y.contentTop, m.lineHeight);
      ((e.font = p.font),
        (e.fillStyle = p.color),
        w(e, [r.subtitle.textContent], b, p.lineHeight),
        A(e, r, o.logo, y.qrCodeBottom - h),
        (e.fillStyle =
          (a = i == null ? void 0 : i.footerColor) != null ? a : p.color),
        w(e, f, y.footerTop, p.lineHeight));
    }
    function x(e, t, n, r) {
      var o = r.cardHeight,
        a = r.color,
        i = r.contentHeight,
        l = r.overhang,
        c = u + 2 * v,
        d = Math.max(l + i + 2 * v, Math.round(c * S));
      ((t.width = c * s),
        (t.height = d * s),
        e.scale(s, s),
        (e.fillStyle = a),
        e.fillRect(0, 0, c, d),
        e.translate(v, (d - l - i) / 2 + l),
        e.save(),
        (e.shadowBlur = I.blur * s),
        (e.shadowColor = I.color),
        (e.shadowOffsetY = I.offsetY * s),
        (e.fillStyle = getComputedStyle(n).backgroundColor),
        G(e, 0, 0, u, o, m),
        e.restore());
    }
    function $(e) {
      var t = e.footerHeight,
        n = e.hasBackdrop,
        r = e.picture,
        o = e.qrCodeSize,
        a = e.textHeight,
        i = n && r != null,
        l = r != null ? B(r) : 0,
        s = i ? l / 2 + p : c + (r != null ? l + p : 0),
        u = s + a + h + o,
        d = i ? l / 2 + b : 0;
      if (n) {
        var m = u + R;
        return {
          cardHeight: m,
          contentTop: s,
          footerTop: m + L,
          isPictureOverlapping: i,
          overhang: d,
          qrCodeBottom: u,
        };
      }
      var _ = u + y,
        f = (t > 0 ? _ + t : u) + c;
      return {
        cardHeight: f,
        contentTop: s,
        footerTop: _,
        isPictureOverlapping: i,
        overhang: d,
        qrCodeBottom: u,
      };
    }
    function P(e, t, n, r) {
      ((t.width = u * s),
        (t.height = r * s),
        e.scale(s, s),
        (e.fillStyle = getComputedStyle(n).backgroundColor),
        G(e, 0, 0, u, r, m));
    }
    function N(e, t) {
      var n = t.fontSize,
        r = t.lineHeight,
        o = getComputedStyle(e);
      return {
        color: o.color,
        font:
          n == null
            ? o.font
            : o.fontStyle + " " + o.fontWeight + " " + n + "px " + o.fontFamily,
        lineHeight: r,
      };
    }
    function M(e, t, n, r) {
      if (!r) {
        W(e, n, c);
        return;
      }
      var o = B(n);
      ((e.fillStyle = getComputedStyle(t).backgroundColor),
        e.beginPath(),
        e.arc(u / 2, 0, o / 2 + b, 0, 2 * Math.PI),
        e.fill(),
        W(e, n, -o / 2));
    }
    function w(e, t, n, r) {
      e.direction = o("WABidi").bidiDir(t.join(" ")) === "rtl" ? "rtl" : "ltr";
      var a = n;
      for (var i of t) (e.fillText(i, u / 2, a), (a += r));
      return a;
    }
    function A(e, t, n, r) {
      var o = t.qrCode.width,
        a = (u - o) / 2;
      ((e.imageSmoothingEnabled = !1),
        e.drawImage(t.qrCode, a, r, o, o),
        (e.imageSmoothingEnabled = !0));
      var i = t.logo.getBoundingClientRect().width;
      e.drawImage(n, a + (o - i) / 2, r + (o - i) / 2, i, i);
    }
    function F(e) {
      var t,
        n,
        r = e.qrCode.querySelector("canvas"),
        o = e.qrCode.querySelector("svg");
      return !(r instanceof HTMLCanvasElement) || o == null
        ? null
        : {
            logo: o,
            name: (t = e.name.firstElementChild) != null ? t : e.name,
            qrCode: r,
            subtitle:
              (n = e.subtitle.firstElementChild) != null ? n : e.subtitle,
          };
    }
    async function O(e) {
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
    function B(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "image" &&
          "height" in e
        ) {
          var t = e.height;
          return t;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "icon" &&
          "size" in e
        ) {
          var n = e.size;
          return n;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function W(e, t, n) {
      e: {
        var r = t;
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "image"
        ) {
          var o = r;
          q(e, o, n);
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "icon"
        ) {
          var a = r;
          U(e, a, n);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            r,
        );
      }
    }
    function q(e, t, n) {
      var r = t.image,
        o = t.radius,
        a = (u - t.width) / 2;
      (e.save(), z(e, a, n, t.width, t.height, o), e.clip());
      var i = Math.max(t.width / r.width, t.height / r.height),
        l = r.width * i,
        s = r.height * i;
      (e.drawImage(r, a + (t.width - l) / 2, n + (t.height - s) / 2, l, s),
        e.restore());
    }
    function U(e, t, n) {
      var r = t.color,
        o = t.icon,
        a = t.iconSize,
        i = t.size,
        l = i / 2;
      ((e.fillStyle = r),
        e.beginPath(),
        e.arc(u / 2, n + l, l, 0, 2 * Math.PI),
        e.fill(),
        e.drawImage(o, (u - a) / 2, n + l - a / 2, a, a));
    }
    function V(e, t, n, r) {
      var o = r === void 0 ? {} : r,
        a = o.maxLines,
        i = a === void 0 ? f : a,
        l = Array.from(e),
        s = [],
        u = [0],
        c = "";
      if (
        (l.forEach(function (e, r) {
          var o = c + e;
          if (c === "" || n(o) <= t) {
            c = o;
            return;
          }
          var a = e === " " ? -1 : c.lastIndexOf(" ");
          (a > 0
            ? (s.push(c.slice(0, a)), (c = c.slice(a + 1) + e))
            : (s.push(c.trimEnd()), (c = e.trim())),
            u.push(r + 1 - Array.from(c).length));
        }),
        s.push(c),
        s.length <= i)
      )
        return s;
      var d = l.slice(u[i - 1]).join("");
      return [].concat(s.slice(0, i - 1), [H(d.trim(), t, n)]);
    }
    function H(e, t, n) {
      for (
        var r = Array.from(e.trimEnd());
        r.length > 0 && n(r.join("") + "\u2026") > t;
      )
        r.pop();
      return r.join("") + "\u2026";
    }
    function G(e, t, n, r, o, a) {
      (z(e, t, n, r, o, a), e.fill());
    }
    function z(e, t, n, r, o, a) {
      (e.beginPath(),
        e.moveTo(t + a, n),
        e.arcTo(t + r, n, t + r, n + o, a),
        e.arcTo(t + r, n + o, t, n + o, a),
        e.arcTo(t, n + o, t, n, a),
        e.arcTo(t, n, t + r, n, a),
        e.closePath());
    }
    ((l.renderQRCodeCardImage = T),
      (l.getQRCodeCardParts = F),
      (l.loadSvgImage = O),
      (l.wrapQRCodeCardName = V));
  },
  98,
);
