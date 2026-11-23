__d(
  "WAWebNewsletterStatusCardPainter",
  [
    "WAWebNewsletterStatusCardDoodle",
    "WAWebNewsletterStatusCardEmoji",
    "WAWebNewsletterStatusCardLayout",
    "WAWebNewsletterStatusCardParagraphs",
    "WAWebNewsletterStatusCardTypography",
    "WAWebNewsletterStatusCardVoice",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "#FFFFFF",
      u = "rgba(0, 0, 0, 0.15)",
      c = 20,
      d = 16,
      m = "#12181C",
      p = "#6C757A",
      _ = "#0063CB",
      f = "#5B6368",
      g = "#0A1014",
      h = "rgba(0, 0, 0, 0.3)",
      y = "#8D9599",
      C = "#027EB5",
      b = "#F5F1EB",
      v = 12,
      S = "#DFE5E7",
      R = "rgba(0, 0, 0, 0.3)",
      L = "#FFFFFF",
      E = "#F7F5F3",
      k = "#1B8755",
      I = "rgba(17, 27, 33, 0.1)",
      T = "rgba(0, 0, 0, 0.08)",
      D = 1,
      x = "#DFE5E7",
      $ = "#F7F5F3",
      P = "rgba(0, 0, 0, 0.6)",
      N = 1,
      M = "rgba(0, 0, 0, 0.6)",
      w = 1.5,
      A = "rgba(0, 0, 0, 0.1)",
      F = "#1DAA61",
      O = 0.6,
      B = 24,
      W = 2 * Math.PI,
      q = "#FFFFFF",
      U = (e = o("WAWebNewsletterStatusCardTypography")).fromAndroidDp(4),
      V = 0.15,
      H = "rgba(17, 27, 33, 0.2)",
      G = "rgba(17, 27, 33, 0.7)",
      z = "#0A1014",
      j = 0.02,
      K = e.fromAndroidDp(0.7),
      Q = e.fromAndroidDp(1.6),
      X = 0.4,
      Y = 0.6,
      J = e.fromAndroidDp(1),
      Z = e.fromAndroidDp(4),
      ee = 2147483647,
      te = 16807,
      ne = 1e3,
      re = [
        {
          d: "M15.83 8.63A1 1 0 0 1 17.2 9a5.98 5.98 0 0 1 0 6 1 1 0 0 1-1.73-1 3.98 3.98 0 0 0 0-4 1 1 0 0 1 .36-1.37Zm-7.66 0A1 1 0 0 1 8.53 10a3.98 3.98 0 0 0 0 4 1 1 0 0 1-1.73 1 5.98 5.98 0 0 1 0-6 1 1 0 0 1 1.37-.37Z",
          fillRule: "evenodd",
        },
        {
          d: "M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
          fillRule: "nonzero",
        },
        {
          d: "m5.33 16.48-.23.8c-.24.77-.48 1.6-.68 2.3.7-.2 1.53-.44 2.3-.68l.8-.23.72.39a8 8 0 1 0-3.3-3.3l.4.72Zm-2.15.22A48.91 48.91 0 0 0 2 21a1 1 0 0 0 1 1c.31 0 2.46-.63 4.3-1.18a10 10 0 1 0-4.12-4.12Z",
          fillRule: "evenodd",
        },
      ],
      oe = [
        {
          d: "M12 14a3 3 0 0 1-2.13-.87A3 3 0 0 1 9 11V5q0-1.25.87-2.12A3 3 0 0 1 12 2q1.25 0 2.12.88Q15 3.75 15 5v6q0 1.25-.88 2.13A3 3 0 0 1 12 14m0 7a1 1 0 0 1-.71-.29 1 1 0 0 1-.3-.71v-2.1a6.86 6.86 0 0 1-5.93-5.82.8.8 0 0 1 .24-.76q.3-.32.8-.32.35 0 .62.26.28.27.35.64a5 5 0 0 0 1.7 2.92Q10.15 16 12 16q1.84 0 3.22-1.18a5 5 0 0 0 1.7-2.92q.07-.37.37-.64.29-.26.63-.26a1 1 0 0 1 .78.32q.3.33.22.75A6.86 6.86 0 0 1 13 17.9V20q0 .42-.29.71-.3.3-.71.29",
          fillRule: "nonzero",
        },
      ],
      ae = [
        {
          d: "M19.18 11 15.3 7.12a.97.97 0 0 1-.3-.7c0-.28.1-.52.3-.72.2-.18.44-.28.71-.28.28 0 .5.1.69.28l4.6 4.6c.1.1.17.2.21.32a1.2 1.2 0 0 1 0 .76.88.88 0 0 1-.21.32l-4.6 4.6a.9.9 0 0 1-.7.29c-.27-.01-.5-.1-.7-.29a1 1 0 0 1-.31-.7.87.87 0 0 1 .29-.7l3.9-3.9Zm-6 1H7c-.83 0-1.54.3-2.13.88A2.9 2.9 0 0 0 4 15v3c0 .28-.1.52-.29.71A.94.94 0 0 1 3 19a.97.97 0 0 1-.71-.29A.97.97 0 0 1 2 18v-3c0-1.38.49-2.56 1.46-3.54A4.82 4.82 0 0 1 7 10h6.18L10.3 7.12a.97.97 0 0 1-.3-.7c0-.28.1-.52.3-.72.2-.18.44-.28.71-.28.28 0 .5.1.69.28l4.6 4.6c.1.1.17.2.21.32a1.2 1.2 0 0 1 0 .76.88.88 0 0 1-.21.32l-4.6 4.6a.9.9 0 0 1-.7.29c-.27-.01-.5-.1-.7-.29a1 1 0 0 1-.31-.7.87.87 0 0 1 .29-.7l2.9-2.9Z",
          fillRule: "nonzero",
        },
      ],
      ie = [
        {
          d: "M12 12c-1.1 0-2.04-.4-2.82-1.18A3.85 3.85 0 0 1 8 8c0-1.1.4-2.04 1.18-2.83A3.85 3.85 0 0 1 12 4c1.1 0 2.04.4 2.82 1.17A3.85 3.85 0 0 1 16 8c0 1.1-.4 2.04-1.18 2.82A3.85 3.85 0 0 1 12 12Zm-6 8c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-.8c0-.57.15-1.09.44-1.56a2.9 2.9 0 0 1 1.16-1.09 13.76 13.76 0 0 1 9.65-1.16c1.07.26 2.12.64 3.15 1.16.48.25.87.61 1.16 1.09.3.47.44 1 .44 1.56v.8c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6Z",
          fillRule: "nonzero",
        },
      ],
      le = [
        {
          d: "m22.69 11.22-.02-.01-1.6-1.63.58-2.23c.16-.6-.2-1.2-.8-1.37l-2.22-.6-.6-2.22c-.16-.6-.78-.95-1.37-.8l-2.23.58-1.64-1.61a1.12 1.12 0 0 0-1.58 0L9.57 2.94l-2.23-.58c-.6-.16-1.2.2-1.37.78l-.6 2.22-2.22.61c-.6.16-.95.77-.79 1.37l.58 2.23-1.61 1.64a1.12 1.12 0 0 0 0 1.58l1.61 1.63-.58 2.23c-.16.6.2 1.2.79 1.37l2.22.6.6 2.23c.16.6.78.95 1.37.8l2.23-.59 1.64 1.61a1.1 1.1 0 0 0 1.57 0l1.64-1.61 2.23.58c.6.16 1.2-.2 1.37-.8l.6-2.21 2.22-.6c.6-.16.95-.78.8-1.38l-.58-2.23 1.61-1.63c.43-.44.44-1.13.02-1.57Zm-12.2 2.12 4.8-4.8a1 1 0 1 1 1.42 1.41l-2.74 2.76-2.75 2.75-.11.1a1.03 1.03 0 0 1-1.31-.1l-2.5-2.5a1 1 0 1 1 1.4-1.41l1.8 1.79Z",
          fillRule: "evenodd",
        },
      ];
    function se(e, t, n, r) {
      (me(e, r.background),
        pe(e, t.card),
        _e(e, t, n, r.verifiedBadgeColor),
        ge(e, t, n.doodle),
        t.showsBubble && ye(e, t, n),
        be(e, t.adminProfile, n),
        Se(e, t.forwarded, n.emojis),
        ue(e, t, n));
      var o = t.reactions;
      o != null && De(e, o, n.emojis);
    }
    function ue(e, t, n) {
      var r = t.emoji,
        o = t.poll,
        a = t.sticker,
        i = t.videoNote,
        l = t.voice;
      (r != null && xe(e, r, m, n.emojis),
        i != null && n.media != null && ce(e, i, n.media),
        l != null && de(e, l, n),
        a != null &&
          n.media != null &&
          e.drawImage(n.media.source, a.x, a.y, a.width, a.height),
        o != null && Ie(e, o, n.emojis));
    }
    function ce(e, t, n) {
      var r = t.x + t.width / 2,
        o = t.y + t.height / 2,
        a = Math.min(t.width, t.height) / 2;
      ((e.fillStyle = q),
        e.beginPath(),
        e.arc(r, o, a + U, 0, W),
        e.fill(),
        e.save(),
        e.beginPath(),
        e.arc(r, o, a, 0, W),
        e.clip(),
        Ae(e, n, t),
        e.restore());
    }
    function de(e, t, n) {
      fe(e, t.avatar, n.avatar);
      var r = t.mic;
      ((e.fillStyle = s),
        e.beginPath(),
        e.arc(r.x + r.width / 2, r.y + r.height / 2, r.width / 2, 0, W),
        e.fill());
      var a = r.width * V;
      (we(
        e,
        oe,
        {
          x: r.x + a,
          y: r.y + a,
          width: r.width - a * 2,
          height: r.height - a * 2,
        },
        o("WAWebNewsletterStatusCardVoice").CARD_VOICE_PLAYED_COLOR,
      ),
        o("WAWebNewsletterStatusCardVoice").paintCardVoiceBars(e, t.bars, 0),
        xe(e, t.duration, p, n.emojis));
    }
    function me(e, t) {
      var n = e.createLinearGradient(
        0,
        0,
        0,
        o("WAWebNewsletterStatusCardLayout").CARD_CANVAS.height,
      );
      (n.addColorStop(0, t.top),
        n.addColorStop(1, t.bottom),
        (e.fillStyle = n),
        e.fillRect(
          0,
          0,
          o("WAWebNewsletterStatusCardLayout").CARD_CANVAS.width,
          o("WAWebNewsletterStatusCardLayout").CARD_CANVAS.height,
        ));
    }
    function pe(e, t) {
      (e.save(),
        (e.shadowColor = u),
        (e.shadowBlur = c),
        (e.fillStyle = s),
        Fe(e, t, d),
        e.fill(),
        e.restore());
    }
    function _e(e, t, n, r) {
      var o = n.avatar,
        a = n.emojis,
        i = t.followers,
        l = t.verifiedBadge;
      (fe(e, t.avatar, o),
        xe(e, t.channelName, m, a),
        l != null && we(e, le, l, r),
        i != null && xe(e, i, p, a),
        we(e, re, t.channelsIcon, h));
    }
    function fe(e, t, n) {
      if (
        (e.save(),
        e.beginPath(),
        e.arc(
          t.x + t.width / 2,
          t.y + t.height / 2,
          t.width / 2,
          0,
          Math.PI * 2,
        ),
        e.clip(),
        n != null)
      )
        Ae(e, n, t);
      else {
        ((e.fillStyle = x), e.fillRect(t.x, t.y, t.width, t.height));
        var r = t.width * O;
        we(
          e,
          re,
          {
            x: t.x + (t.width - r) / 2,
            y: t.y + (t.height - r) / 2,
            width: r,
            height: r,
          },
          s,
        );
      }
      e.restore();
    }
    function ge(e, t, n) {
      var r = t.body;
      (e.save(),
        Fe(e, t.card, d),
        e.clip(),
        (e.fillStyle = b),
        e.fillRect(r.x, r.y, r.width, r.height),
        n != null && he(e, r, n),
        e.restore());
    }
    function he(e, t, n) {
      (e.beginPath(), e.rect(t.x, t.y, t.width, t.height), e.clip());
      for (
        var r = t.y;
        r < t.y + t.height;
        r += o("WAWebNewsletterStatusCardDoodle").CARD_DOODLE_TILE.height
      )
        for (
          var a = t.x;
          a < t.x + t.width;
          a += o("WAWebNewsletterStatusCardDoodle").CARD_DOODLE_TILE.width
        )
          e.drawImage(
            n.source,
            a,
            r,
            o("WAWebNewsletterStatusCardDoodle").CARD_DOODLE_TILE.width,
            o("WAWebNewsletterStatusCardDoodle").CARD_DOODLE_TILE.height,
          );
    }
    function ye(e, t, n) {
      var r = t.actionButton,
        a = t.link,
        i = t.media,
        l = t.readMore,
        u = t.textLines,
        c = n.media;
      ((e.fillStyle = s),
        Fe(e, t.bubble, v),
        e.fill(),
        i != null &&
          c != null &&
          (e.save(),
          Fe(e, i, o("WAWebNewsletterStatusCardLayout").CARD_MEDIA_RADIUS),
          e.clip(),
          Ae(e, c, i),
          e.restore()),
        t.album != null && Ee(e, t.album, n),
        a != null && ke(e, a, n),
        t.textMarks != null && Re(e, t.textMarks),
        u.forEach(function (t) {
          return xe(e, t, Le(t), n.emojis);
        }),
        l != null && xe(e, l.run, k, n.emojis),
        r != null && Ce(e, r, n.emojis));
    }
    function Ce(e, t, n) {
      var r = t.divider,
        o = t.label;
      ((e.fillStyle = I),
        e.fillRect(r.x, r.y, r.width, r.height),
        xe(e, o, k, n));
    }
    function be(e, t, n) {
      var r = n.adminProfilePicture,
        o = n.emojis;
      if (t != null) {
        var a = t.background,
          i = t.initials,
          l = t.nameColor;
        (a != null && ((e.fillStyle = s), Fe(e, a, v), e.fill()),
          ve(e, t, r),
          r == null && i != null && xe(e, i, l, o),
          xe(e, t.name, l, o));
      }
    }
    function ve(e, t, n) {
      var r = t.avatar,
        o = t.avatarColor,
        a = t.initials;
      if (
        (e.save(),
        e.beginPath(),
        e.arc(r.x + r.width / 2, r.y + r.height / 2, r.width / 2, 0, W),
        e.clip(),
        n != null
          ? Ae(e, n, r)
          : ((e.fillStyle = a != null ? o : $),
            e.fillRect(r.x, r.y, r.width, r.height)),
        n == null && a == null)
      ) {
        var i = r.width * O;
        we(
          e,
          ie,
          {
            x: r.x + (r.width - i) / 2,
            y: r.y + (r.height - i) / 2,
            width: i,
            height: i,
          },
          P,
        );
      }
      e.restore();
    }
    function Se(e, t, n) {
      t != null &&
        (we(e, ae, t.icon, y, t.isIconFlipped),
        xe(e, t.label, p, n),
        t.channelName != null && xe(e, t.channelName, C, n));
    }
    function Re(e, t) {
      var n = t.bullets,
        r = t.quoteBars;
      ((e.fillStyle = m),
        n.forEach(function (t) {
          var n = t.radius,
            r = t.x,
            o = t.y;
          (e.beginPath(), e.arc(r, o, n, 0, W), e.fill());
        }),
        (e.fillStyle = G),
        r.forEach(function (t) {
          (Fe(
            e,
            t,
            o("WAWebNewsletterStatusCardParagraphs").CARD_QUOTE_BAR_RADIUS,
          ),
            e.fill());
        }));
    }
    function Le(e) {
      var t = e.isLink,
        n = e.isQuoted;
      return t === !0 ? _ : n === !0 ? G : m;
    }
    function Ee(e, t, n) {
      var r = t.more,
        a = t.tiles;
      (a.forEach(function (t, a) {
        var i,
          l = (i = n.albumTiles) == null ? void 0 : i[a];
        (e.save(),
          Fe(e, t, o("WAWebNewsletterStatusCardLayout").CARD_MEDIA_RADIUS),
          e.clip(),
          l != null
            ? Ae(e, l, t)
            : ((e.fillStyle = S), e.fillRect(t.x, t.y, t.width, t.height)),
          (r == null ? void 0 : r.tile) === t &&
            ((e.fillStyle = R), e.fillRect(t.x, t.y, t.width, t.height)),
          e.restore());
      }),
        r != null && xe(e, r.run, L, n.emojis));
    }
    function ke(e, t, n) {
      var r = n.emojis,
        o = n.linkThumbnail,
        a = t.domain;
      ((e.fillStyle = E), Oe(e, t.box, t.boxCorners), e.fill());
      var i = t.thumbnail;
      (i != null &&
        o != null &&
        (e.save(),
        Oe(e, i, t.thumbnailCorners),
        e.clip(),
        Ae(e, o, i),
        e.restore()),
        t.titleLines.forEach(function (t) {
          return xe(e, t, m, r);
        }),
        t.descriptionLines.forEach(function (t) {
          return xe(e, t, p, r);
        }),
        a != null && xe(e, a, p, r));
    }
    function Ie(e, t, n) {
      (t.title.runs.forEach(function (t) {
        return xe(e, t, g, n);
      }),
        t.options.forEach(function (t) {
          var r = t.radio;
          (e.beginPath(),
            e.arc(
              r.x + r.width / 2,
              r.y + r.height / 2,
              (r.width - w) / 2,
              0,
              Math.PI * 2,
            ),
            (e.strokeStyle = M),
            (e.lineWidth = w),
            e.stroke(),
            t.title.runs.forEach(function (t) {
              return xe(e, t, g, n);
            }),
            t.count != null && xe(e, t.count, g, n),
            t.barTrack != null && Te(e, t.barTrack, A),
            t.barFill != null && Te(e, t.barFill, F));
        }),
        t.moreOptions != null && xe(e, t.moreOptions, k, n));
    }
    function Te(e, t, n) {
      ((e.fillStyle = n), Fe(e, t, t.height / 2), e.fill());
    }
    function De(e, t, n) {
      ((e.fillStyle = s),
        Fe(e, t.pill, t.pill.height / 2),
        e.fill(),
        (e.strokeStyle = T),
        (e.lineWidth = D),
        e.stroke(),
        t.emojis.forEach(function (t) {
          return xe(e, t, m, n);
        }),
        t.count != null && xe(e, t.count, f, n));
    }
    function xe(e, t, n, r) {
      var a = t.highlight;
      if ((a == null ? void 0 : a.kind) === "spoiler") {
        $e(e, a.box);
        return;
      }
      if ((a == null ? void 0 : a.kind) === "inlineCode") {
        var i = a.box;
        ((e.fillStyle = H), e.fillRect(i.x, i.y, i.width, i.height));
      }
      ((e.font = t.font),
        (e.fillStyle = n),
        (e.textBaseline = "middle"),
        (e.direction = t.isRtl ? "rtl" : "ltr"));
      var l = o("WAWebNewsletterStatusCardEmoji").getCardEmojiPieces(t, r),
        s = l != null ? Me(e, t, l) : Ne(e, t),
        u = s.left,
        c = s.width;
      t.isStruckThrough === !0 && e.fillRect(u, t.y - N / 2, c, N);
    }
    function $e(e, t) {
      var n = {
        x: t.x + J,
        y: t.y + Z,
        width: t.width - J * 2,
        height: t.height - Z * 2,
      };
      if (!(n.width <= 0 || n.height <= 0)) {
        var r = e.getTransform().a,
          o = Math.floor(n.width * n.height * Math.pow(r, 2) * j),
          a = Pe(n);
        (e.save(), (e.fillStyle = z));
        for (var i = 0; i < o; i++) {
          var l = n.x + a() * n.width,
            s = n.y + a() * n.height,
            u = K + a() * (Q - K),
            c = Math.min(1, Math.max(0, X + (a() - 0.5) * Y));
          ((e.globalAlpha = c * a()),
            e.beginPath(),
            e.arc(l, s, u, 0, W),
            e.fill());
        }
        e.restore();
      }
    }
    function Pe(e) {
      var t = e.x,
        n = e.y,
        r = (Math.abs(Math.round((t + n) * ne)) % (ee - 1)) + 1;
      return function () {
        return ((r = (r * te) % ee), (r - 1) / (ee - 1));
      };
    }
    function Ne(e, t) {
      var n;
      ((e.letterSpacing = ((n = t.letterSpacing) != null ? n : 0) + "px"),
        (e.textAlign = t.align),
        e.fillText(t.text, t.x, t.y));
      var r = e.measureText(t.text).width;
      return { left: t.align === "right" ? t.x - r : t.x, width: r };
    }
    function Me(e, t, n) {
      var r,
        a = (r = t.letterSpacing) != null ? r : 0;
      e.letterSpacing = "0px";
      var i = n.map(function (n) {
          var r = n.emoji,
            i = n.text;
          return (
            (r != null
              ? o("WAWebNewsletterStatusCardEmoji").getCardEmojiAdvance(t.font)
              : e.measureText(i).width) +
            a * o("WAWebNewsletterStatusCardTypography").countCardCharacters(i)
          );
        }),
        l = i.reduce(function (e, t) {
          return e + t;
        }, 0),
        s = t.align === "right" ? t.x - l : t.x,
        u = o("WAWebNewsletterStatusCardEmoji").getCardEmojiSize(t.font),
        c = Array.from(n.keys());
      ((e.letterSpacing = a + "px"), (e.textAlign = "left"));
      var d = s;
      return (
        (t.isRtl ? c.reverse() : c).forEach(function (r) {
          var o = n[r],
            a = o.emoji,
            l = o.text;
          (a != null
            ? e.drawImage(a.source, d, t.y - u / 2, u, u)
            : e.fillText(l, d, t.y),
            (d += i[r]));
        }),
        { left: s, width: l }
      );
    }
    function we(e, t, n, r, o) {
      (o === void 0 && (o = !1),
        e.save(),
        e.translate(o ? n.x + n.width : n.x, n.y),
        e.scale((o ? -n.width : n.width) / B, n.height / B),
        (e.fillStyle = r),
        t.forEach(function (t) {
          var n = t.d,
            r = t.fillRule;
          return e.fill(new Path2D(n), r);
        }),
        e.restore());
    }
    function Ae(e, t, n) {
      var r = Math.max(n.width / t.width, n.height / t.height),
        o = n.width / r,
        a = n.height / r;
      e.drawImage(
        t.source,
        (t.width - o) / 2,
        (t.height - a) / 2,
        o,
        a,
        n.x,
        n.y,
        n.width,
        n.height,
      );
    }
    function Fe(e, t, n) {
      Oe(e, t, { topLeft: n, topRight: n, bottomRight: n, bottomLeft: n });
    }
    function Oe(e, t, n) {
      var r = t.height,
        o = t.width,
        a = t.x,
        i = t.y,
        l = function (t) {
          return Math.min(t, o / 2, r / 2);
        },
        s = l(n.topLeft);
      (e.beginPath(),
        e.moveTo(a + s, i),
        e.arcTo(a + o, i, a + o, i + r, l(n.topRight)),
        e.arcTo(a + o, i + r, a, i + r, l(n.bottomRight)),
        e.arcTo(a, i + r, a, i, l(n.bottomLeft)),
        e.arcTo(a, i, a + o, i, s),
        e.closePath());
    }
    l.default = se;
  },
  98,
);
