__d(
  "WAWebCommunityLinkingFailedModal.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCmd",
    "WAWebFormatParticipantNames",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebPairList",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.failedGroups,
        r = e.isCommunityFull,
        a = e.parentGroupId,
        i;
      t[0] !== n
        ? ((i = o(
            "WAWebFormatParticipantNames",
          ).getFormattedGroupListForCommunity(
            o("WAWebPairList").flattenPairList(n.map(d)),
          )),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        c,
        m;
      if (t[2] !== n.length || t[3] !== l || t[4] !== r || t[5] !== a) {
        if (((c = []), r)) {
          var p;
          t[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = u.jsx(o("WAWebButton.react").Button, {
                type: "secondary",
                onClick: o("WAWebModalManager").closeModalManager,
                children: s._(/*BTDS*/ "OK"),
              })),
              (t[8] = p))
            : (p = t[8]);
          var _ = p;
          c.push(_);
          var f;
          (t[9] !== l
            ? ((f = s._(
                /*BTDS*/ "{groups} could not be added because the community is full.",
                [s._param("groups", l)],
              )),
              (t[9] = l),
              (t[10] = f))
            : (f = t[10]),
            (m = f));
        } else {
          var g;
          t[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = u.jsx(o("WAWebButton.react").Button, {
                type: "secondary",
                onClick: o("WAWebModalManager").closeModalManager,
                children: s._(/*BTDS*/ "Cancel"),
              })),
              (t[11] = g))
            : (g = t[11]);
          var h = g;
          c.push(h);
          var y;
          t[12] !== a
            ? ((y = function () {
                (o("WAWebCmd").Cmd.openCommunityHomeManageGroups(a),
                  o("WAWebModalManager").ModalManager.close());
              }),
              (t[12] = a),
              (t[13] = y))
            : (y = t[13]);
          var C;
          t[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = s._(/*BTDS*/ "Add groups")), (t[14] = C))
            : (C = t[14]);
          var b;
          t[15] !== y
            ? ((b = u.jsx(o("WAWebButton.react").Button, {
                type: "primary",
                onClick: y,
                children: C,
              })),
              (t[15] = y),
              (t[16] = b))
            : (b = t[16]);
          var v = b;
          c.push(v);
          var S;
          (t[17] !== n.length || t[18] !== l
            ? ((S = s._(
                /*BTDS*/ '_j{"*":"{groups} could not be added to the community. Try adding them again.","_1":"{groups} could not be added to the community. Try adding it again."}',
                [s._plural(n.length), s._param("groups", l)],
              )),
              (t[17] = n.length),
              (t[18] = l),
              (t[19] = S))
            : (S = t[19]),
            (m = S));
        }
        ((t[2] = n.length),
          (t[3] = l),
          (t[4] = r),
          (t[5] = a),
          (t[6] = c),
          (t[7] = m));
      } else ((c = t[6]), (m = t[7]));
      var R;
      t[20] !== m
        ? ((R = u.jsx("div", { children: m })), (t[20] = m), (t[21] = R))
        : (R = t[21]);
      var L;
      return (
        t[22] !== c || t[23] !== R
          ? ((L = u.jsx(o("WAWebModal.react").Modal, {
              actions: c,
              children: R,
            })),
            (t[22] = c),
            (t[23] = R),
            (t[24] = L))
          : (L = t[24]),
        L
      );
    }
    function d(e) {
      return [e, ""];
    }
    l.default = c;
  },
  226,
);
