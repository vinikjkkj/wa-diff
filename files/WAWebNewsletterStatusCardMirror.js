__d(
  "WAWebNewsletterStatusCardMirror",
  ["WAWebNewsletterStatusCardLayout"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.adminProfile,
        n = e.emoji,
        r = e.followers,
        o = e.forwarded,
        a = e.link,
        i = e.poll,
        l = e.reactions,
        m = e.verifiedBadge,
        _ = e.voice;
      return babelHelpers.extends({}, e, {
        avatar: y(e.avatar),
        channelName: C(e.channelName),
        verifiedBadge: m != null ? y(m) : null,
        followers: r != null ? C(r) : null,
        channelsIcon: y(e.channelsIcon),
        link: a != null ? d(a) : null,
        poll: i != null ? p(i) : null,
        reactions: l != null ? f(l) : null,
        voice: _ != null ? c(_) : null,
        emoji: n != null ? C(n) : null,
        forwarded: o != null ? u(o) : null,
        adminProfile: t != null ? s(t) : null,
      });
    }
    function s(e) {
      var t = e.background,
        n = e.initials;
      return babelHelpers.extends({}, e, {
        background: t != null ? y(t) : null,
        avatar: y(e.avatar),
        initials: n != null ? C(n) : null,
        name: C(e.name),
      });
    }
    function u(e) {
      var t = e.channelName;
      return {
        icon: y(e.icon),
        isIconFlipped: !e.isIconFlipped,
        label: C(e.label),
        channelName: t != null ? C(t) : null,
      };
    }
    function c(e) {
      return {
        avatar: y(e.avatar),
        mic: y(e.mic),
        bars: e.bars.map(y),
        duration: C(e.duration),
      };
    }
    function d(e) {
      var t = e.domain,
        n = e.thumbnail;
      return {
        box: y(e.box),
        boxCorners: m(e.boxCorners),
        thumbnail: n != null ? y(n) : null,
        thumbnailCorners: m(e.thumbnailCorners),
        titleLines: e.titleLines.map(C),
        descriptionLines: e.descriptionLines.map(C),
        domain: t != null ? C(t) : null,
      };
    }
    function m(e) {
      var t = e.bottomLeft,
        n = e.bottomRight,
        r = e.topLeft,
        o = e.topRight;
      return { topLeft: o, topRight: r, bottomRight: t, bottomLeft: n };
    }
    function p(e) {
      var t = e.moreOptions;
      return {
        title: g(e.title),
        options: e.options.map(_),
        moreOptions: t != null ? C(t) : null,
      };
    }
    function _(e) {
      var t = e.barFill,
        n = e.barTrack,
        r = e.count;
      return {
        radio: y(e.radio),
        title: g(e.title),
        count: r != null ? C(r) : null,
        barTrack: n != null ? y(n) : null,
        barFill: t != null ? y(t) : null,
      };
    }
    function f(e) {
      var t = e.count;
      return {
        pill: y(e.pill),
        emojis: e.emojis.map(C),
        count: t != null ? C(t) : null,
      };
    }
    function g(e) {
      var t =
        o("WAWebNewsletterStatusCardLayout").CARD_CANVAS.width - e.x - e.width;
      return babelHelpers.extends({}, e, {
        x: t,
        runs: e.runs.map(function (n) {
          return h(n, t - e.x);
        }),
      });
    }
    function h(e, t) {
      var n = e.highlight,
        r = babelHelpers.extends({}, e, { x: e.x + t });
      return n != null
        ? babelHelpers.extends({}, r, {
            highlight: babelHelpers.extends({}, n, {
              box: babelHelpers.extends({}, n.box, { x: n.box.x + t }),
            }),
          })
        : r;
    }
    function y(e) {
      return babelHelpers.extends({}, e, {
        x:
          o("WAWebNewsletterStatusCardLayout").CARD_CANVAS.width -
          e.x -
          e.width,
      });
    }
    function C(e) {
      return babelHelpers.extends({}, e, {
        x: o("WAWebNewsletterStatusCardLayout").CARD_CANVAS.width - e.x,
        align:
          e.align === "left"
            ? "right"
            : e.align === "right"
              ? "left"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e.align,
                  );
                })(),
      });
    }
    l.mirrorNewsletterStatusCardLayout = e;
  },
  98,
);
