__d(
  "KFSchema",
  [],
  function (t, n, r, o, a, i) {
    var e = e || {};
    ((e.keyframes = e.keyframes || {}),
      (e.keyframes.CommandType = {
        MoveTo: 0,
        LineTo: 1,
        QuadTo: 2,
        CubicTo: 3,
        HorizontalLineTo: 4,
        VerticalLineTo: 5,
        CloseLineTo: 6,
        SmoothQuadTo: 7,
        CloseQuadTo: 8,
        CloseSmoothQuadTo: 9,
        SmoothCubicTo: 10,
        CloseCubicTo: 11,
        CloseSmoothCubicTo: 12,
      }),
      (e.keyframes.CommandTypeName = {
        0: "MoveTo",
        1: "LineTo",
        2: "QuadTo",
        3: "CubicTo",
        4: "HorizontalLineTo",
        5: "VerticalLineTo",
        6: "CloseLineTo",
        7: "SmoothQuadTo",
        8: "CloseQuadTo",
        9: "CloseSmoothQuadTo",
        10: "SmoothCubicTo",
        11: "CloseCubicTo",
        12: "CloseSmoothCubicTo",
      }),
      (e.keyframes.TweenType = { Bezier: 0, Linear: 1, Hold: 2 }),
      (e.keyframes.TweenTypeName = { 0: "Bezier", 1: "Linear", 2: "Hold" }),
      (e.keyframes.VectorCompositeOrder = { FillStroke: 0, StrokeFill: 1 }),
      (e.keyframes.VectorCompositeOrderName = {
        0: "FillStroke",
        1: "StrokeFill",
      }),
      (e.keyframes.StrokeLineCap = { Butt: 0, Round: 1, Square: 2 }),
      (e.keyframes.StrokeLineCapName = { 0: "Butt", 1: "Round", 2: "Square" }),
      (e.keyframes.StrokeLineJoin = { Miter: 0, Round: 1, Bevel: 2 }),
      (e.keyframes.StrokeLineJoinName = { 0: "Miter", 1: "Round", 2: "Bevel" }),
      (e.keyframes.TrackMatteType = { None: 0, Alpha: 1, Alpha_Inverted: 2 }),
      (e.keyframes.TrackMatteTypeName = {
        0: "None",
        1: "Alpha",
        2: "Alpha_Inverted",
      }),
      (e.keyframes.GradientType = { Linear: 0, Radial: 1 }),
      (e.keyframes.GradientTypeName = { 0: "Linear", 1: "Radial" }),
      (e.keyframes.TextWeight = {
        Thin: 0,
        UltraLight: 1,
        Light: 2,
        Book: 3,
        Medium: 4,
        SemiBold: 5,
        Bold: 6,
        UltraBold: 7,
        Heavy: 8,
        UltraHeavy: 9,
      }),
      (e.keyframes.TextWeightName = {
        0: "Thin",
        1: "UltraLight",
        2: "Light",
        3: "Book",
        4: "Medium",
        5: "SemiBold",
        6: "Bold",
        7: "UltraBold",
        8: "Heavy",
        9: "UltraHeavy",
      }),
      (e.keyframes.Size = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Size.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Size.prototype.width = function () {
        return this.bb.readFloat32(this.bb_pos);
      }),
      (e.keyframes.Size.prototype.height = function () {
        return this.bb.readFloat32(this.bb_pos + 4);
      }),
      (e.keyframes.Size.createSize = function (e, t, n) {
        return (e.prep(4, 8), e.writeFloat32(n), e.writeFloat32(t), e.offset());
      }),
      (e.keyframes.Point = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Point.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Point.prototype.x = function () {
        return this.bb.readFloat32(this.bb_pos);
      }),
      (e.keyframes.Point.prototype.y = function () {
        return this.bb.readFloat32(this.bb_pos + 4);
      }),
      (e.keyframes.Point.createPoint = function (e, t, n) {
        return (e.prep(4, 8), e.writeFloat32(n), e.writeFloat32(t), e.offset());
      }),
      (e.keyframes.Color = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Color.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Color.prototype.red = function () {
        return this.bb.readUint8(this.bb_pos);
      }),
      (e.keyframes.Color.prototype.green = function () {
        return this.bb.readUint8(this.bb_pos + 1);
      }),
      (e.keyframes.Color.prototype.blue = function () {
        return this.bb.readUint8(this.bb_pos + 2);
      }),
      (e.keyframes.Color.prototype.alpha = function () {
        return this.bb.readUint8(this.bb_pos + 3);
      }),
      (e.keyframes.Color.createColor = function (e, t, n, r, o) {
        return (
          e.prep(1, 4),
          e.writeInt8(o),
          e.writeInt8(r),
          e.writeInt8(n),
          e.writeInt8(t),
          e.offset()
        );
      }),
      (e.keyframes.ColorArray = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.ColorArray.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.ColorArray.getRootAsColorArray = function (t, n) {
        return (n || new e.keyframes.ColorArray()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.ColorArray.prototype.colors = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 4);
        return r
          ? (n || new e.keyframes.Color()).__init(
              this.bb.__vector(this.bb_pos + r) + t * 4,
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ColorArray.prototype.colorsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ColorArray.startColorArray = function (e) {
        e.startObject(1);
      }),
      (e.keyframes.ColorArray.addColors = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.ColorArray.startColorsVector = function (e, t) {
        e.startVector(4, t, 1);
      }),
      (e.keyframes.ColorArray.endColorArray = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.ColorArray.createColorArray = function (t, n) {
        return (
          e.keyframes.ColorArray.startColorArray(t),
          e.keyframes.ColorArray.addColors(t, n),
          e.keyframes.ColorArray.endColorArray(t)
        );
      }),
      (e.keyframes.Path = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Path.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Path.getRootAsPath = function (t, n) {
        return (n || new e.keyframes.Path()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Path.prototype.commands = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readInt8(this.bb.__vector(this.bb_pos + t) + e) : 0;
      }),
      (e.keyframes.Path.prototype.commandsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Path.prototype.commandsArray = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e
          ? new Int8Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Path.prototype.points = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.Path.prototype.pointsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Path.prototype.pointsArray = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Path.startPath = function (e) {
        e.startObject(2);
      }),
      (e.keyframes.Path.addCommands = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.Path.createCommandsVector = function (e, t) {
        e.startVector(1, t.length, 1);
        for (var n = t.length - 1; n >= 0; n--) e.addInt8(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Path.startCommandsVector = function (e, t) {
        e.startVector(1, t, 1);
      }),
      (e.keyframes.Path.addPoints = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.Path.createPointsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Path.startPointsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Path.endPath = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Path.createPath = function (t, n, r) {
        return (
          e.keyframes.Path.startPath(t),
          e.keyframes.Path.addCommands(t, n),
          e.keyframes.Path.addPoints(t, r),
          e.keyframes.Path.endPath(t)
        );
      }),
      (e.keyframes.Tween = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Tween.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Tween.getRootAsTween = function (t, n) {
        return (n || new e.keyframes.Tween()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Tween.prototype.type = function () {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.TweenType.Bezier;
      }),
      (e.keyframes.Tween.prototype.control1 = function (t) {
        var n = this.bb.__offset(this.bb_pos, 6);
        return n
          ? (t || new e.keyframes.Point()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Tween.prototype.control2 = function (t) {
        var n = this.bb.__offset(this.bb_pos, 8);
        return n
          ? (t || new e.keyframes.Point()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Tween.startTween = function (e) {
        e.startObject(3);
      }),
      (e.keyframes.Tween.addType = function (t, n) {
        t.addFieldInt8(0, n, e.keyframes.TweenType.Bezier);
      }),
      (e.keyframes.Tween.addControl1 = function (e, t) {
        e.addFieldStruct(1, t, 0);
      }),
      (e.keyframes.Tween.addControl2 = function (e, t) {
        e.addFieldStruct(2, t, 0);
      }),
      (e.keyframes.Tween.endTween = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Tween.createTween = function (t, n, r, o) {
        return (
          e.keyframes.Tween.startTween(t),
          e.keyframes.Tween.addType(t, n),
          e.keyframes.Tween.addControl1(t, r),
          e.keyframes.Tween.addControl2(t, o),
          e.keyframes.Tween.endTween(t)
        );
      }),
      (e.keyframes.ScalarAnimation = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.ScalarAnimation.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.ScalarAnimation.getRootAsScalarAnimation = function (t, n) {
        return (n || new e.keyframes.ScalarAnimation()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.ScalarAnimation.prototype.values = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.ScalarAnimation.prototype.valuesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ScalarAnimation.prototype.valuesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.ScalarAnimation.prototype.keyframes = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.ScalarAnimation.prototype.keyframesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ScalarAnimation.prototype.keyframesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.ScalarAnimation.prototype.tweens = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 8);
        return r
          ? (n || new e.keyframes.Tween()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ScalarAnimation.prototype.tweensLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ScalarAnimation.startScalarAnimation = function (e) {
        e.startObject(3);
      }),
      (e.keyframes.ScalarAnimation.addValues = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.ScalarAnimation.createValuesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ScalarAnimation.startValuesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ScalarAnimation.addKeyframes = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.ScalarAnimation.createKeyframesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ScalarAnimation.startKeyframesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ScalarAnimation.addTweens = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.ScalarAnimation.createTweensVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ScalarAnimation.startTweensVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ScalarAnimation.endScalarAnimation = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.ScalarAnimation.createScalarAnimation = function (
        t,
        n,
        r,
        o,
      ) {
        return (
          e.keyframes.ScalarAnimation.startScalarAnimation(t),
          e.keyframes.ScalarAnimation.addValues(t, n),
          e.keyframes.ScalarAnimation.addKeyframes(t, r),
          e.keyframes.ScalarAnimation.addTweens(t, o),
          e.keyframes.ScalarAnimation.endScalarAnimation(t)
        );
      }),
      (e.keyframes.ScalarArray = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.ScalarArray.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.ScalarArray.getRootAsScalarArray = function (t, n) {
        return (n || new e.keyframes.ScalarArray()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.ScalarArray.prototype.values = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.ScalarArray.prototype.valuesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ScalarArray.prototype.valuesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.ScalarArray.startScalarArray = function (e) {
        e.startObject(1);
      }),
      (e.keyframes.ScalarArray.addValues = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.ScalarArray.createValuesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ScalarArray.startValuesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ScalarArray.endScalarArray = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.ScalarArray.createScalarArray = function (t, n) {
        return (
          e.keyframes.ScalarArray.startScalarArray(t),
          e.keyframes.ScalarArray.addValues(t, n),
          e.keyframes.ScalarArray.endScalarArray(t)
        );
      }),
      (e.keyframes.ScalarArrayAnimation = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.ScalarArrayAnimation.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.ScalarArrayAnimation.getRootAsScalarArrayAnimation =
        function (t, n) {
          return (n || new e.keyframes.ScalarArrayAnimation()).__init(
            t.readInt32(t.position()) + t.position(),
            t,
          );
        }),
      (e.keyframes.ScalarArrayAnimation.prototype.values = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 4);
        return r
          ? (n || new e.keyframes.ScalarArray()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ScalarArrayAnimation.prototype.valuesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ScalarArrayAnimation.prototype.keyframes = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.ScalarArrayAnimation.prototype.keyframesLength =
        function () {
          var e = this.bb.__offset(this.bb_pos, 6);
          return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
        }),
      (e.keyframes.ScalarArrayAnimation.prototype.keyframesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.ScalarArrayAnimation.prototype.tweens = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 8);
        return r
          ? (n || new e.keyframes.Tween()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ScalarArrayAnimation.prototype.tweensLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ScalarArrayAnimation.startScalarArrayAnimation = function (
        e,
      ) {
        e.startObject(3);
      }),
      (e.keyframes.ScalarArrayAnimation.addValues = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.ScalarArrayAnimation.createValuesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ScalarArrayAnimation.startValuesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ScalarArrayAnimation.addKeyframes = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.ScalarArrayAnimation.createKeyframesVector = function (
        e,
        t,
      ) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ScalarArrayAnimation.startKeyframesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ScalarArrayAnimation.addTweens = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.ScalarArrayAnimation.createTweensVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ScalarArrayAnimation.startTweensVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ScalarArrayAnimation.endScalarArrayAnimation = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.ScalarArrayAnimation.createScalarArrayAnimation = function (
        t,
        n,
        r,
        o,
      ) {
        return (
          e.keyframes.ScalarArrayAnimation.startScalarArrayAnimation(t),
          e.keyframes.ScalarArrayAnimation.addValues(t, n),
          e.keyframes.ScalarArrayAnimation.addKeyframes(t, r),
          e.keyframes.ScalarArrayAnimation.addTweens(t, o),
          e.keyframes.ScalarArrayAnimation.endScalarArrayAnimation(t)
        );
      }),
      (e.keyframes.PointAnimation = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.PointAnimation.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.PointAnimation.getRootAsPointAnimation = function (t, n) {
        return (n || new e.keyframes.PointAnimation()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.PointAnimation.prototype.values = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 4);
        return r
          ? (n || new e.keyframes.Point()).__init(
              this.bb.__vector(this.bb_pos + r) + t * 8,
              this.bb,
            )
          : null;
      }),
      (e.keyframes.PointAnimation.prototype.valuesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.PointAnimation.prototype.keyframes = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.PointAnimation.prototype.keyframesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.PointAnimation.prototype.keyframesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.PointAnimation.prototype.tweens = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 8);
        return r
          ? (n || new e.keyframes.Tween()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.PointAnimation.prototype.tweensLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.PointAnimation.startPointAnimation = function (e) {
        e.startObject(3);
      }),
      (e.keyframes.PointAnimation.addValues = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.PointAnimation.startValuesVector = function (e, t) {
        e.startVector(8, t, 4);
      }),
      (e.keyframes.PointAnimation.addKeyframes = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.PointAnimation.createKeyframesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.PointAnimation.startKeyframesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.PointAnimation.addTweens = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.PointAnimation.createTweensVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.PointAnimation.startTweensVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.PointAnimation.endPointAnimation = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.PointAnimation.createPointAnimation = function (t, n, r, o) {
        return (
          e.keyframes.PointAnimation.startPointAnimation(t),
          e.keyframes.PointAnimation.addValues(t, n),
          e.keyframes.PointAnimation.addKeyframes(t, r),
          e.keyframes.PointAnimation.addTweens(t, o),
          e.keyframes.PointAnimation.endPointAnimation(t)
        );
      }),
      (e.keyframes.ColorAnimation = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.ColorAnimation.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.ColorAnimation.getRootAsColorAnimation = function (t, n) {
        return (n || new e.keyframes.ColorAnimation()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.ColorAnimation.prototype.values = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 4);
        return r
          ? (n || new e.keyframes.Color()).__init(
              this.bb.__vector(this.bb_pos + r) + t * 4,
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ColorAnimation.prototype.valuesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ColorAnimation.prototype.keyframes = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.ColorAnimation.prototype.keyframesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ColorAnimation.prototype.keyframesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.ColorAnimation.prototype.tweens = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 8);
        return r
          ? (n || new e.keyframes.Tween()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ColorAnimation.prototype.tweensLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ColorAnimation.startColorAnimation = function (e) {
        e.startObject(3);
      }),
      (e.keyframes.ColorAnimation.addValues = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.ColorAnimation.startValuesVector = function (e, t) {
        e.startVector(4, t, 1);
      }),
      (e.keyframes.ColorAnimation.addKeyframes = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.ColorAnimation.createKeyframesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ColorAnimation.startKeyframesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ColorAnimation.addTweens = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.ColorAnimation.createTweensVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ColorAnimation.startTweensVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ColorAnimation.endColorAnimation = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.ColorAnimation.createColorAnimation = function (t, n, r, o) {
        return (
          e.keyframes.ColorAnimation.startColorAnimation(t),
          e.keyframes.ColorAnimation.addValues(t, n),
          e.keyframes.ColorAnimation.addKeyframes(t, r),
          e.keyframes.ColorAnimation.addTweens(t, o),
          e.keyframes.ColorAnimation.endColorAnimation(t)
        );
      }),
      (e.keyframes.ColorArrayAnimation = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.ColorArrayAnimation.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.ColorArrayAnimation.getRootAsColorArrayAnimation = function (
        t,
        n,
      ) {
        return (n || new e.keyframes.ColorArrayAnimation()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.ColorArrayAnimation.prototype.values = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 4);
        return r
          ? (n || new e.keyframes.ColorArray()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ColorArrayAnimation.prototype.valuesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ColorArrayAnimation.prototype.keyframes = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.ColorArrayAnimation.prototype.keyframesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ColorArrayAnimation.prototype.keyframesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.ColorArrayAnimation.prototype.tweens = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 8);
        return r
          ? (n || new e.keyframes.Tween()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.ColorArrayAnimation.prototype.tweensLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ColorArrayAnimation.startColorArrayAnimation = function (e) {
        e.startObject(3);
      }),
      (e.keyframes.ColorArrayAnimation.addValues = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.ColorArrayAnimation.createValuesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ColorArrayAnimation.startValuesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ColorArrayAnimation.addKeyframes = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.ColorArrayAnimation.createKeyframesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ColorArrayAnimation.startKeyframesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ColorArrayAnimation.addTweens = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.ColorArrayAnimation.createTweensVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.ColorArrayAnimation.startTweensVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.ColorArrayAnimation.endColorArrayAnimation = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.ColorArrayAnimation.createColorArrayAnimation = function (
        t,
        n,
        r,
        o,
      ) {
        return (
          e.keyframes.ColorArrayAnimation.startColorArrayAnimation(t),
          e.keyframes.ColorArrayAnimation.addValues(t, n),
          e.keyframes.ColorArrayAnimation.addKeyframes(t, r),
          e.keyframes.ColorArrayAnimation.addTweens(t, o),
          e.keyframes.ColorArrayAnimation.endColorArrayAnimation(t)
        );
      }),
      (e.keyframes.PathAnimation = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.PathAnimation.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.PathAnimation.getRootAsPathAnimation = function (t, n) {
        return (n || new e.keyframes.PathAnimation()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.PathAnimation.prototype.values = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 4);
        return r
          ? (n || new e.keyframes.Path()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.PathAnimation.prototype.valuesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.PathAnimation.prototype.keyframes = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.PathAnimation.prototype.keyframesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.PathAnimation.prototype.keyframesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.PathAnimation.prototype.tweens = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 8);
        return r
          ? (n || new e.keyframes.Tween()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.PathAnimation.prototype.tweensLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.PathAnimation.startPathAnimation = function (e) {
        e.startObject(3);
      }),
      (e.keyframes.PathAnimation.addValues = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.PathAnimation.createValuesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.PathAnimation.startValuesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.PathAnimation.addKeyframes = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.PathAnimation.createKeyframesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.PathAnimation.startKeyframesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.PathAnimation.addTweens = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.PathAnimation.createTweensVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.PathAnimation.startTweensVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.PathAnimation.endPathAnimation = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.PathAnimation.createPathAnimation = function (t, n, r, o) {
        return (
          e.keyframes.PathAnimation.startPathAnimation(t),
          e.keyframes.PathAnimation.addValues(t, n),
          e.keyframes.PathAnimation.addKeyframes(t, r),
          e.keyframes.PathAnimation.addTweens(t, o),
          e.keyframes.PathAnimation.endPathAnimation(t)
        );
      }),
      (e.keyframes.Gradient = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Gradient.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Gradient.getRootAsGradient = function (t, n) {
        return (n || new e.keyframes.Gradient()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Gradient.prototype.type = function () {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.GradientType.Linear;
      }),
      (e.keyframes.Gradient.prototype.rampStart = function (t) {
        var n = this.bb.__offset(this.bb_pos, 6);
        return n
          ? (t || new e.keyframes.Point()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Gradient.prototype.rampStartAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 8);
        return n
          ? (t || new e.keyframes.PointAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.prototype.rampEnd = function (t) {
        var n = this.bb.__offset(this.bb_pos, 10);
        return n
          ? (t || new e.keyframes.Point()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Gradient.prototype.rampEndAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 12);
        return n
          ? (t || new e.keyframes.PointAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.prototype.colors = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 14);
        return r
          ? (n || new e.keyframes.Color()).__init(
              this.bb.__vector(this.bb_pos + r) + t * 4,
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.prototype.colorsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 14);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Gradient.prototype.colorsAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 16);
        return n
          ? (t || new e.keyframes.ColorArrayAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.prototype.positions = function (e) {
        var t = this.bb.__offset(this.bb_pos, 18);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.Gradient.prototype.positionsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 18);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Gradient.prototype.positionsArray = function () {
        var e = this.bb.__offset(this.bb_pos, 18);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Gradient.prototype.positionsAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 20);
        return n
          ? (t || new e.keyframes.ScalarArrayAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.prototype.highlightLength = function () {
        var e = this.bb.__offset(this.bb_pos, 22);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Gradient.prototype.highlightLengthAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 24);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.prototype.highlightAngle = function () {
        var e = this.bb.__offset(this.bb_pos, 26);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Gradient.prototype.highlightAngleAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 28);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Gradient.startGradient = function (e) {
        e.startObject(13);
      }),
      (e.keyframes.Gradient.addType = function (t, n) {
        t.addFieldInt8(0, n, e.keyframes.GradientType.Linear);
      }),
      (e.keyframes.Gradient.addRampStart = function (e, t) {
        e.addFieldStruct(1, t, 0);
      }),
      (e.keyframes.Gradient.addRampStartAnimation = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.Gradient.addRampEnd = function (e, t) {
        e.addFieldStruct(3, t, 0);
      }),
      (e.keyframes.Gradient.addRampEndAnimation = function (e, t) {
        e.addFieldOffset(4, t, 0);
      }),
      (e.keyframes.Gradient.addColors = function (e, t) {
        e.addFieldOffset(5, t, 0);
      }),
      (e.keyframes.Gradient.startColorsVector = function (e, t) {
        e.startVector(4, t, 1);
      }),
      (e.keyframes.Gradient.addColorsAnimation = function (e, t) {
        e.addFieldOffset(6, t, 0);
      }),
      (e.keyframes.Gradient.addPositions = function (e, t) {
        e.addFieldOffset(7, t, 0);
      }),
      (e.keyframes.Gradient.createPositionsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Gradient.startPositionsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Gradient.addPositionsAnimation = function (e, t) {
        e.addFieldOffset(8, t, 0);
      }),
      (e.keyframes.Gradient.addHighlightLength = function (e, t) {
        e.addFieldFloat32(9, t, 0);
      }),
      (e.keyframes.Gradient.addHighlightLengthAnimation = function (e, t) {
        e.addFieldOffset(10, t, 0);
      }),
      (e.keyframes.Gradient.addHighlightAngle = function (e, t) {
        e.addFieldFloat32(11, t, 0);
      }),
      (e.keyframes.Gradient.addHighlightAngleAnimation = function (e, t) {
        e.addFieldOffset(12, t, 0);
      }),
      (e.keyframes.Gradient.endGradient = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Gradient.createGradient = function (
        t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
      ) {
        return (
          e.keyframes.Gradient.startGradient(t),
          e.keyframes.Gradient.addType(t, n),
          e.keyframes.Gradient.addRampStart(t, r),
          e.keyframes.Gradient.addRampStartAnimation(t, o),
          e.keyframes.Gradient.addRampEnd(t, a),
          e.keyframes.Gradient.addRampEndAnimation(t, i),
          e.keyframes.Gradient.addColors(t, l),
          e.keyframes.Gradient.addColorsAnimation(t, s),
          e.keyframes.Gradient.addPositions(t, u),
          e.keyframes.Gradient.addPositionsAnimation(t, c),
          e.keyframes.Gradient.addHighlightLength(t, d),
          e.keyframes.Gradient.addHighlightLengthAnimation(t, m),
          e.keyframes.Gradient.addHighlightAngle(t, p),
          e.keyframes.Gradient.addHighlightAngleAnimation(t, _),
          e.keyframes.Gradient.endGradient(t)
        );
      }),
      (e.keyframes.Bitmap = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Bitmap.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Bitmap.getRootAsBitmap = function (t, n) {
        return (n || new e.keyframes.Bitmap()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Bitmap.prototype.size = function (t) {
        var n = this.bb.__offset(this.bb_pos, 4);
        return n
          ? (t || new e.keyframes.Size()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Bitmap.prototype.content = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.readUint8(this.bb.__vector(this.bb_pos + t) + e) : 0;
      }),
      (e.keyframes.Bitmap.prototype.contentLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Bitmap.prototype.contentArray = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e
          ? new Uint8Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Bitmap.prototype.name = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t ? this.bb.__string(this.bb_pos + t, e) : null;
      }),
      (e.keyframes.Bitmap.startBitmap = function (e) {
        e.startObject(3);
      }),
      (e.keyframes.Bitmap.addSize = function (e, t) {
        e.addFieldStruct(0, t, 0);
      }),
      (e.keyframes.Bitmap.addContent = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.Bitmap.createContentVector = function (e, t) {
        e.startVector(1, t.length, 1);
        for (var n = t.length - 1; n >= 0; n--) e.addInt8(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Bitmap.startContentVector = function (e, t) {
        e.startVector(1, t, 1);
      }),
      (e.keyframes.Bitmap.addName = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.Bitmap.endBitmap = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Bitmap.createBitmap = function (t, n, r, o) {
        return (
          e.keyframes.Bitmap.startBitmap(t),
          e.keyframes.Bitmap.addSize(t, n),
          e.keyframes.Bitmap.addContent(t, r),
          e.keyframes.Bitmap.addName(t, o),
          e.keyframes.Bitmap.endBitmap(t)
        );
      }),
      (e.keyframes.Audio = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Audio.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Audio.getRootAsAudio = function (t, n) {
        return (n || new e.keyframes.Audio()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Audio.prototype.length = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Audio.prototype.content = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.readUint8(this.bb.__vector(this.bb_pos + t) + e) : 0;
      }),
      (e.keyframes.Audio.prototype.contentLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Audio.prototype.contentArray = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e
          ? new Uint8Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Audio.prototype.name = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t ? this.bb.__string(this.bb_pos + t, e) : null;
      }),
      (e.keyframes.Audio.startAudio = function (e) {
        e.startObject(3);
      }),
      (e.keyframes.Audio.addLength = function (e, t) {
        e.addFieldFloat32(0, t, 0);
      }),
      (e.keyframes.Audio.addContent = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.Audio.createContentVector = function (e, t) {
        e.startVector(1, t.length, 1);
        for (var n = t.length - 1; n >= 0; n--) e.addInt8(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Audio.startContentVector = function (e, t) {
        e.startVector(1, t, 1);
      }),
      (e.keyframes.Audio.addName = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.Audio.endAudio = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Audio.createAudio = function (t, n, r, o) {
        return (
          e.keyframes.Audio.startAudio(t),
          e.keyframes.Audio.addLength(t, n),
          e.keyframes.Audio.addContent(t, r),
          e.keyframes.Audio.addName(t, o),
          e.keyframes.Audio.endAudio(t)
        );
      }),
      (e.keyframes.Video = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Video.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Video.getRootAsVideo = function (t, n) {
        return (n || new e.keyframes.Video()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Video.prototype.size = function (t) {
        var n = this.bb.__offset(this.bb_pos, 4);
        return n
          ? (t || new e.keyframes.Size()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Video.prototype.length = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.readInt32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Video.prototype.content = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t ? this.bb.readUint8(this.bb.__vector(this.bb_pos + t) + e) : 0;
      }),
      (e.keyframes.Video.prototype.contentLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Video.prototype.contentArray = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e
          ? new Uint8Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Video.prototype.name = function (e) {
        var t = this.bb.__offset(this.bb_pos, 10);
        return t ? this.bb.__string(this.bb_pos + t, e) : null;
      }),
      (e.keyframes.Video.startVideo = function (e) {
        e.startObject(4);
      }),
      (e.keyframes.Video.addSize = function (e, t) {
        e.addFieldStruct(0, t, 0);
      }),
      (e.keyframes.Video.addLength = function (e, t) {
        e.addFieldInt32(1, t, 0);
      }),
      (e.keyframes.Video.addContent = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.Video.createContentVector = function (e, t) {
        e.startVector(1, t.length, 1);
        for (var n = t.length - 1; n >= 0; n--) e.addInt8(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Video.startContentVector = function (e, t) {
        e.startVector(1, t, 1);
      }),
      (e.keyframes.Video.addName = function (e, t) {
        e.addFieldOffset(3, t, 0);
      }),
      (e.keyframes.Video.endVideo = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Video.createVideo = function (t, n, r, o, a) {
        return (
          e.keyframes.Video.startVideo(t),
          e.keyframes.Video.addSize(t, n),
          e.keyframes.Video.addLength(t, r),
          e.keyframes.Video.addContent(t, o),
          e.keyframes.Video.addName(t, a),
          e.keyframes.Video.endVideo(t)
        );
      }),
      (e.keyframes.Font = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Font.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Font.getRootAsFont = function (t, n) {
        return (n || new e.keyframes.Font()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Font.prototype.content = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readUint8(this.bb.__vector(this.bb_pos + t) + e) : 0;
      }),
      (e.keyframes.Font.prototype.contentLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Font.prototype.contentArray = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e
          ? new Uint8Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Font.prototype.name = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.__string(this.bb_pos + t, e) : null;
      }),
      (e.keyframes.Font.startFont = function (e) {
        e.startObject(2);
      }),
      (e.keyframes.Font.addContent = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.Font.createContentVector = function (e, t) {
        e.startVector(1, t.length, 1);
        for (var n = t.length - 1; n >= 0; n--) e.addInt8(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Font.startContentVector = function (e, t) {
        e.startVector(1, t, 1);
      }),
      (e.keyframes.Font.addName = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.Font.endFont = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Font.createFont = function (t, n, r) {
        return (
          e.keyframes.Font.startFont(t),
          e.keyframes.Font.addContent(t, n),
          e.keyframes.Font.addName(t, r),
          e.keyframes.Font.endFont(t)
        );
      }),
      (e.keyframes.ProgressMarker = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.ProgressMarker.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.ProgressMarker.getRootAsProgressMarker = function (t, n) {
        return (n || new e.keyframes.ProgressMarker()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.ProgressMarker.prototype.name = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.__string(this.bb_pos + t, e) : null;
      }),
      (e.keyframes.ProgressMarker.prototype.startProgress = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ProgressMarker.prototype.endProgress = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.ProgressMarker.startProgressMarker = function (e) {
        e.startObject(3);
      }),
      (e.keyframes.ProgressMarker.addName = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.ProgressMarker.addStartProgress = function (e, t) {
        e.addFieldFloat32(1, t, 0);
      }),
      (e.keyframes.ProgressMarker.addEndProgress = function (e, t) {
        e.addFieldFloat32(2, t, 0);
      }),
      (e.keyframes.ProgressMarker.endProgressMarker = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.ProgressMarker.createProgressMarker = function (t, n, r, o) {
        return (
          e.keyframes.ProgressMarker.startProgressMarker(t),
          e.keyframes.ProgressMarker.addName(t, n),
          e.keyframes.ProgressMarker.addStartProgress(t, r),
          e.keyframes.ProgressMarker.addEndProgress(t, o),
          e.keyframes.ProgressMarker.endProgressMarker(t)
        );
      }),
      (e.keyframes.Layer = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Layer.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Layer.getRootAsLayer = function (t, n) {
        return (n || new e.keyframes.Layer()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Layer.prototype.id = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.readInt32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.name = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t ? this.bb.__string(this.bb_pos + t, e) : null;
      }),
      (e.keyframes.Layer.prototype.tags = function (e, t) {
        var n = this.bb.__offset(this.bb_pos, 8);
        return n
          ? this.bb.__string(this.bb.__vector(this.bb_pos + n) + e * 4, t)
          : null;
      }),
      (e.keyframes.Layer.prototype.tagsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.subLayer = function (t) {
        var n = this.bb.__offset(this.bb_pos, 10);
        return n
          ? (t || new e.keyframes.Layer()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.subLayers = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 12);
        return r
          ? (n || new e.keyframes.Layer()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.subLayersLength = function () {
        var e = this.bb.__offset(this.bb_pos, 12);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.subScene = function () {
        var e = this.bb.__offset(this.bb_pos, 14);
        return e ? this.bb.readInt32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.subScenes = function (e) {
        var t = this.bb.__offset(this.bb_pos, 16);
        return t
          ? this.bb.readInt32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.Layer.prototype.subScenesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 16);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.subScenesArray = function () {
        var e = this.bb.__offset(this.bb_pos, 16);
        return e
          ? new Int32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.zIndex = function () {
        var e = this.bb.__offset(this.bb_pos, 18);
        return e ? this.bb.readInt32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.isGroup = function () {
        var e = this.bb.__offset(this.bb_pos, 20);
        return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
      }),
      (e.keyframes.Layer.prototype.fromProgress = function () {
        var e = this.bb.__offset(this.bb_pos, 22);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.toProgress = function () {
        var e = this.bb.__offset(this.bb_pos, 24);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 1;
      }),
      (e.keyframes.Layer.prototype.progressOffset = function () {
        var e = this.bb.__offset(this.bb_pos, 26);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.anchorPoint = function (t) {
        var n = this.bb.__offset(this.bb_pos, 28);
        return n
          ? (t || new e.keyframes.Point()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Layer.prototype.anchorPointAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 30);
        return n
          ? (t || new e.keyframes.PointAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.xPosition = function () {
        var e = this.bb.__offset(this.bb_pos, 32);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.xPositionAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 34);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.yPosition = function () {
        var e = this.bb.__offset(this.bb_pos, 36);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.yPositionAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 38);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.position = function (t) {
        var n = this.bb.__offset(this.bb_pos, 40);
        return n
          ? (t || new e.keyframes.PathAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.rotation = function () {
        var e = this.bb.__offset(this.bb_pos, 42);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.rotationAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 44);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.scale = function (t) {
        var n = this.bb.__offset(this.bb_pos, 46);
        return n
          ? (t || new e.keyframes.Point()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Layer.prototype.scaleAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 48);
        return n
          ? (t || new e.keyframes.PointAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.opacity = function () {
        var e = this.bb.__offset(this.bb_pos, 50);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 1;
      }),
      (e.keyframes.Layer.prototype.opacityAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 52);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.path = function (t) {
        var n = this.bb.__offset(this.bb_pos, 54);
        return n
          ? (t || new e.keyframes.Path()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.pathAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 56);
        return n
          ? (t || new e.keyframes.PathAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.trimStart = function () {
        var e = this.bb.__offset(this.bb_pos, 58);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.trimStartAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 60);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.trimEnd = function () {
        var e = this.bb.__offset(this.bb_pos, 62);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.trimEndAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 64);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.trimOffset = function () {
        var e = this.bb.__offset(this.bb_pos, 66);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.trimOffsetAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 68);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.fillColor = function (t) {
        var n = this.bb.__offset(this.bb_pos, 70);
        return n
          ? (t || new e.keyframes.Color()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Layer.prototype.fillColorAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 72);
        return n
          ? (t || new e.keyframes.ColorAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.gradientFill = function (t) {
        var n = this.bb.__offset(this.bb_pos, 74);
        return n
          ? (t || new e.keyframes.Gradient()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.strokeColor = function (t) {
        var n = this.bb.__offset(this.bb_pos, 76);
        return n
          ? (t || new e.keyframes.Color()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Layer.prototype.strokeColorAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 78);
        return n
          ? (t || new e.keyframes.ColorAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.strokeWidth = function () {
        var e = this.bb.__offset(this.bb_pos, 80);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.strokeWidthAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 82);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.strokeLineCap = function () {
        var t = this.bb.__offset(this.bb_pos, 84);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.StrokeLineCap.Butt;
      }),
      (e.keyframes.Layer.prototype.strokeLineJoin = function () {
        var t = this.bb.__offset(this.bb_pos, 86);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.StrokeLineJoin.Miter;
      }),
      (e.keyframes.Layer.prototype.miterLimit = function () {
        var e = this.bb.__offset(this.bb_pos, 88);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.miterLimitAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 90);
        return n
          ? (t || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.vectorCompositeOrder = function () {
        var t = this.bb.__offset(this.bb_pos, 92);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.VectorCompositeOrder.FillStroke;
      }),
      (e.keyframes.Layer.prototype.clippingPath = function (t) {
        var n = this.bb.__offset(this.bb_pos, 94);
        return n
          ? (t || new e.keyframes.Path()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.clippingPathAnimation = function (t) {
        var n = this.bb.__offset(this.bb_pos, 96);
        return n
          ? (t || new e.keyframes.PathAnimation()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.isTrackMatte = function () {
        var e = this.bb.__offset(this.bb_pos, 98);
        return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
      }),
      (e.keyframes.Layer.prototype.trackMatteType = function () {
        var t = this.bb.__offset(this.bb_pos, 100);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.TrackMatteType.None;
      }),
      (e.keyframes.Layer.prototype.trackMatteId = function () {
        var e = this.bb.__offset(this.bb_pos, 102);
        return e ? this.bb.readInt32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.bitmapIndex = function () {
        var e = this.bb.__offset(this.bb_pos, 104);
        return e ? this.bb.readInt32(this.bb_pos + e) : -1;
      }),
      (e.keyframes.Layer.prototype.audioLevel = function (e) {
        var t = this.bb.__offset(this.bb_pos, 106);
        return t
          ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.Layer.prototype.audioLevelLength = function () {
        var e = this.bb.__offset(this.bb_pos, 106);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.audioLevelArray = function () {
        var e = this.bb.__offset(this.bb_pos, 106);
        return e
          ? new Float32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.audioLevels = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 108);
        return r
          ? (n || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.audioLevelsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 108);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.audioIndex = function () {
        var e = this.bb.__offset(this.bb_pos, 110);
        return e ? this.bb.readInt32(this.bb_pos + e) : -1;
      }),
      (e.keyframes.Layer.prototype.videoLevels = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 112);
        return r
          ? (n || new e.keyframes.ScalarAnimation()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Layer.prototype.videoLevelsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 112);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.videoIndex = function () {
        var e = this.bb.__offset(this.bb_pos, 114);
        return e ? this.bb.readInt32(this.bb_pos + e) : -1;
      }),
      (e.keyframes.Layer.prototype.fontIndex = function () {
        var e = this.bb.__offset(this.bb_pos, 116);
        return e ? this.bb.readInt32(this.bb_pos + e) : -1;
      }),
      (e.keyframes.Layer.prototype.text = function (e) {
        var t = this.bb.__offset(this.bb_pos, 118);
        return t ? this.bb.__string(this.bb_pos + t, e) : null;
      }),
      (e.keyframes.Layer.prototype.textTypeface = function (e) {
        var t = this.bb.__offset(this.bb_pos, 120);
        return t ? this.bb.__string(this.bb_pos + t, e) : null;
      }),
      (e.keyframes.Layer.prototype.textSize = function () {
        var e = this.bb.__offset(this.bb_pos, 122);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.textColor = function (t) {
        var n = this.bb.__offset(this.bb_pos, 124);
        return n
          ? (t || new e.keyframes.Color()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Layer.prototype.textAlign = function () {
        var e = this.bb.__offset(this.bb_pos, 126);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.textValign = function () {
        var e = this.bb.__offset(this.bb_pos, 128);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.textTracking = function () {
        var e = this.bb.__offset(this.bb_pos, 130);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.textLeading = function () {
        var e = this.bb.__offset(this.bb_pos, 132);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Layer.prototype.textItalic = function () {
        var e = this.bb.__offset(this.bb_pos, 134);
        return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
      }),
      (e.keyframes.Layer.prototype.textWeight = function () {
        var t = this.bb.__offset(this.bb_pos, 136);
        return t
          ? this.bb.readInt8(this.bb_pos + t)
          : e.keyframes.TextWeight.Thin;
      }),
      (e.keyframes.Layer.prototype.textTextboxSize = function (t) {
        var n = this.bb.__offset(this.bb_pos, 138);
        return n
          ? (t || new e.keyframes.Size()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Layer.startLayer = function (e) {
        e.startObject(68);
      }),
      (e.keyframes.Layer.addId = function (e, t) {
        e.addFieldInt32(0, t, 0);
      }),
      (e.keyframes.Layer.addName = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.Layer.addTags = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.Layer.createTagsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Layer.startTagsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Layer.addSubLayer = function (e, t) {
        e.addFieldOffset(3, t, 0);
      }),
      (e.keyframes.Layer.addSubLayers = function (e, t) {
        e.addFieldOffset(4, t, 0);
      }),
      (e.keyframes.Layer.createSubLayersVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Layer.startSubLayersVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Layer.addSubScene = function (e, t) {
        e.addFieldInt32(5, t, 0);
      }),
      (e.keyframes.Layer.addSubScenes = function (e, t) {
        e.addFieldOffset(6, t, 0);
      }),
      (e.keyframes.Layer.createSubScenesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addInt32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Layer.startSubScenesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Layer.addZIndex = function (e, t) {
        e.addFieldInt32(7, t, 0);
      }),
      (e.keyframes.Layer.addIsGroup = function (e, t) {
        e.addFieldInt8(8, +t, 0);
      }),
      (e.keyframes.Layer.addFromProgress = function (e, t) {
        e.addFieldFloat32(9, t, 0);
      }),
      (e.keyframes.Layer.addToProgress = function (e, t) {
        e.addFieldFloat32(10, t, 1);
      }),
      (e.keyframes.Layer.addProgressOffset = function (e, t) {
        e.addFieldFloat32(11, t, 0);
      }),
      (e.keyframes.Layer.addAnchorPoint = function (e, t) {
        e.addFieldStruct(12, t, 0);
      }),
      (e.keyframes.Layer.addAnchorPointAnimation = function (e, t) {
        e.addFieldOffset(13, t, 0);
      }),
      (e.keyframes.Layer.addXPosition = function (e, t) {
        e.addFieldFloat32(14, t, 0);
      }),
      (e.keyframes.Layer.addXPositionAnimation = function (e, t) {
        e.addFieldOffset(15, t, 0);
      }),
      (e.keyframes.Layer.addYPosition = function (e, t) {
        e.addFieldFloat32(16, t, 0);
      }),
      (e.keyframes.Layer.addYPositionAnimation = function (e, t) {
        e.addFieldOffset(17, t, 0);
      }),
      (e.keyframes.Layer.addPosition = function (e, t) {
        e.addFieldOffset(18, t, 0);
      }),
      (e.keyframes.Layer.addRotation = function (e, t) {
        e.addFieldFloat32(19, t, 0);
      }),
      (e.keyframes.Layer.addRotationAnimation = function (e, t) {
        e.addFieldOffset(20, t, 0);
      }),
      (e.keyframes.Layer.addScale = function (e, t) {
        e.addFieldStruct(21, t, 0);
      }),
      (e.keyframes.Layer.addScaleAnimation = function (e, t) {
        e.addFieldOffset(22, t, 0);
      }),
      (e.keyframes.Layer.addOpacity = function (e, t) {
        e.addFieldFloat32(23, t, 1);
      }),
      (e.keyframes.Layer.addOpacityAnimation = function (e, t) {
        e.addFieldOffset(24, t, 0);
      }),
      (e.keyframes.Layer.addPath = function (e, t) {
        e.addFieldOffset(25, t, 0);
      }),
      (e.keyframes.Layer.addPathAnimation = function (e, t) {
        e.addFieldOffset(26, t, 0);
      }),
      (e.keyframes.Layer.addTrimStart = function (e, t) {
        e.addFieldFloat32(27, t, 0);
      }),
      (e.keyframes.Layer.addTrimStartAnimation = function (e, t) {
        e.addFieldOffset(28, t, 0);
      }),
      (e.keyframes.Layer.addTrimEnd = function (e, t) {
        e.addFieldFloat32(29, t, 0);
      }),
      (e.keyframes.Layer.addTrimEndAnimation = function (e, t) {
        e.addFieldOffset(30, t, 0);
      }),
      (e.keyframes.Layer.addTrimOffset = function (e, t) {
        e.addFieldFloat32(31, t, 0);
      }),
      (e.keyframes.Layer.addTrimOffsetAnimation = function (e, t) {
        e.addFieldOffset(32, t, 0);
      }),
      (e.keyframes.Layer.addFillColor = function (e, t) {
        e.addFieldStruct(33, t, 0);
      }),
      (e.keyframes.Layer.addFillColorAnimation = function (e, t) {
        e.addFieldOffset(34, t, 0);
      }),
      (e.keyframes.Layer.addGradientFill = function (e, t) {
        e.addFieldOffset(35, t, 0);
      }),
      (e.keyframes.Layer.addStrokeColor = function (e, t) {
        e.addFieldStruct(36, t, 0);
      }),
      (e.keyframes.Layer.addStrokeColorAnimation = function (e, t) {
        e.addFieldOffset(37, t, 0);
      }),
      (e.keyframes.Layer.addStrokeWidth = function (e, t) {
        e.addFieldFloat32(38, t, 0);
      }),
      (e.keyframes.Layer.addStrokeWidthAnimation = function (e, t) {
        e.addFieldOffset(39, t, 0);
      }),
      (e.keyframes.Layer.addStrokeLineCap = function (t, n) {
        t.addFieldInt8(40, n, e.keyframes.StrokeLineCap.Butt);
      }),
      (e.keyframes.Layer.addStrokeLineJoin = function (t, n) {
        t.addFieldInt8(41, n, e.keyframes.StrokeLineJoin.Miter);
      }),
      (e.keyframes.Layer.addMiterLimit = function (e, t) {
        e.addFieldFloat32(42, t, 0);
      }),
      (e.keyframes.Layer.addMiterLimitAnimation = function (e, t) {
        e.addFieldOffset(43, t, 0);
      }),
      (e.keyframes.Layer.addVectorCompositeOrder = function (t, n) {
        t.addFieldInt8(44, n, e.keyframes.VectorCompositeOrder.FillStroke);
      }),
      (e.keyframes.Layer.addClippingPath = function (e, t) {
        e.addFieldOffset(45, t, 0);
      }),
      (e.keyframes.Layer.addClippingPathAnimation = function (e, t) {
        e.addFieldOffset(46, t, 0);
      }),
      (e.keyframes.Layer.addIsTrackMatte = function (e, t) {
        e.addFieldInt8(47, +t, 0);
      }),
      (e.keyframes.Layer.addTrackMatteType = function (t, n) {
        t.addFieldInt8(48, n, e.keyframes.TrackMatteType.None);
      }),
      (e.keyframes.Layer.addTrackMatteId = function (e, t) {
        e.addFieldInt32(49, t, 0);
      }),
      (e.keyframes.Layer.addBitmapIndex = function (e, t) {
        e.addFieldInt32(50, t, -1);
      }),
      (e.keyframes.Layer.addAudioLevel = function (e, t) {
        e.addFieldOffset(51, t, 0);
      }),
      (e.keyframes.Layer.createAudioLevelVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Layer.startAudioLevelVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Layer.addAudioLevels = function (e, t) {
        e.addFieldOffset(52, t, 0);
      }),
      (e.keyframes.Layer.createAudioLevelsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Layer.startAudioLevelsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Layer.addAudioIndex = function (e, t) {
        e.addFieldInt32(53, t, -1);
      }),
      (e.keyframes.Layer.addVideoLevels = function (e, t) {
        e.addFieldOffset(54, t, 0);
      }),
      (e.keyframes.Layer.createVideoLevelsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Layer.startVideoLevelsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Layer.addVideoIndex = function (e, t) {
        e.addFieldInt32(55, t, -1);
      }),
      (e.keyframes.Layer.addFontIndex = function (e, t) {
        e.addFieldInt32(56, t, -1);
      }),
      (e.keyframes.Layer.addText = function (e, t) {
        e.addFieldOffset(57, t, 0);
      }),
      (e.keyframes.Layer.addTextTypeface = function (e, t) {
        e.addFieldOffset(58, t, 0);
      }),
      (e.keyframes.Layer.addTextSize = function (e, t) {
        e.addFieldFloat32(59, t, 0);
      }),
      (e.keyframes.Layer.addTextColor = function (e, t) {
        e.addFieldStruct(60, t, 0);
      }),
      (e.keyframes.Layer.addTextAlign = function (e, t) {
        e.addFieldFloat32(61, t, 0);
      }),
      (e.keyframes.Layer.addTextValign = function (e, t) {
        e.addFieldFloat32(62, t, 0);
      }),
      (e.keyframes.Layer.addTextTracking = function (e, t) {
        e.addFieldFloat32(63, t, 0);
      }),
      (e.keyframes.Layer.addTextLeading = function (e, t) {
        e.addFieldFloat32(64, t, 0);
      }),
      (e.keyframes.Layer.addTextItalic = function (e, t) {
        e.addFieldInt8(65, +t, 0);
      }),
      (e.keyframes.Layer.addTextWeight = function (t, n) {
        t.addFieldInt8(66, n, e.keyframes.TextWeight.Thin);
      }),
      (e.keyframes.Layer.addTextTextboxSize = function (e, t) {
        e.addFieldStruct(67, t, 0);
      }),
      (e.keyframes.Layer.endLayer = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Layer.createLayer = function (
        t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z,
        j,
        K,
        Q,
        X,
        Y,
        J,
        Z,
        ee,
        te,
        ne,
        re,
        oe,
        ae,
        ie,
        le,
        se,
        ue,
        ce,
        de,
        me,
        pe,
        _e,
        fe,
      ) {
        return (
          e.keyframes.Layer.startLayer(t),
          e.keyframes.Layer.addId(t, n),
          e.keyframes.Layer.addName(t, r),
          e.keyframes.Layer.addTags(t, o),
          e.keyframes.Layer.addSubLayer(t, a),
          e.keyframes.Layer.addSubLayers(t, i),
          e.keyframes.Layer.addSubScene(t, l),
          e.keyframes.Layer.addSubScenes(t, s),
          e.keyframes.Layer.addZIndex(t, u),
          e.keyframes.Layer.addIsGroup(t, c),
          e.keyframes.Layer.addFromProgress(t, d),
          e.keyframes.Layer.addToProgress(t, m),
          e.keyframes.Layer.addProgressOffset(t, p),
          e.keyframes.Layer.addAnchorPoint(t, _),
          e.keyframes.Layer.addAnchorPointAnimation(t, f),
          e.keyframes.Layer.addXPosition(t, g),
          e.keyframes.Layer.addXPositionAnimation(t, h),
          e.keyframes.Layer.addYPosition(t, y),
          e.keyframes.Layer.addYPositionAnimation(t, C),
          e.keyframes.Layer.addPosition(t, b),
          e.keyframes.Layer.addRotation(t, v),
          e.keyframes.Layer.addRotationAnimation(t, S),
          e.keyframes.Layer.addScale(t, R),
          e.keyframes.Layer.addScaleAnimation(t, L),
          e.keyframes.Layer.addOpacity(t, E),
          e.keyframes.Layer.addOpacityAnimation(t, k),
          e.keyframes.Layer.addPath(t, I),
          e.keyframes.Layer.addPathAnimation(t, T),
          e.keyframes.Layer.addTrimStart(t, D),
          e.keyframes.Layer.addTrimStartAnimation(t, x),
          e.keyframes.Layer.addTrimEnd(t, $),
          e.keyframes.Layer.addTrimEndAnimation(t, P),
          e.keyframes.Layer.addTrimOffset(t, N),
          e.keyframes.Layer.addTrimOffsetAnimation(t, M),
          e.keyframes.Layer.addFillColor(t, w),
          e.keyframes.Layer.addFillColorAnimation(t, A),
          e.keyframes.Layer.addGradientFill(t, F),
          e.keyframes.Layer.addStrokeColor(t, O),
          e.keyframes.Layer.addStrokeColorAnimation(t, B),
          e.keyframes.Layer.addStrokeWidth(t, W),
          e.keyframes.Layer.addStrokeWidthAnimation(t, q),
          e.keyframes.Layer.addStrokeLineCap(t, U),
          e.keyframes.Layer.addStrokeLineJoin(t, V),
          e.keyframes.Layer.addMiterLimit(t, H),
          e.keyframes.Layer.addMiterLimitAnimation(t, G),
          e.keyframes.Layer.addVectorCompositeOrder(t, z),
          e.keyframes.Layer.addClippingPath(t, j),
          e.keyframes.Layer.addClippingPathAnimation(t, K),
          e.keyframes.Layer.addIsTrackMatte(t, Q),
          e.keyframes.Layer.addTrackMatteType(t, X),
          e.keyframes.Layer.addTrackMatteId(t, Y),
          e.keyframes.Layer.addBitmapIndex(t, J),
          e.keyframes.Layer.addAudioLevel(t, Z),
          e.keyframes.Layer.addAudioLevels(t, ee),
          e.keyframes.Layer.addAudioIndex(t, te),
          e.keyframes.Layer.addVideoLevels(t, ne),
          e.keyframes.Layer.addVideoIndex(t, re),
          e.keyframes.Layer.addFontIndex(t, oe),
          e.keyframes.Layer.addText(t, ae),
          e.keyframes.Layer.addTextTypeface(t, ie),
          e.keyframes.Layer.addTextSize(t, le),
          e.keyframes.Layer.addTextColor(t, se),
          e.keyframes.Layer.addTextAlign(t, ue),
          e.keyframes.Layer.addTextValign(t, ce),
          e.keyframes.Layer.addTextTracking(t, de),
          e.keyframes.Layer.addTextLeading(t, me),
          e.keyframes.Layer.addTextItalic(t, pe),
          e.keyframes.Layer.addTextWeight(t, _e),
          e.keyframes.Layer.addTextTextboxSize(t, fe),
          e.keyframes.Layer.endLayer(t)
        );
      }),
      (e.keyframes.Scene = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Scene.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Scene.getRootAsScene = function (t, n) {
        return (n || new e.keyframes.Scene()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Scene.prototype.id = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.readInt32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Scene.prototype.size = function (t) {
        var n = this.bb.__offset(this.bb_pos, 6);
        return n
          ? (t || new e.keyframes.Size()).__init(this.bb_pos + n, this.bb)
          : null;
      }),
      (e.keyframes.Scene.prototype.frameRate = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Scene.prototype.duration = function () {
        var e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Scene.prototype.rootLayer = function (t) {
        var n = this.bb.__offset(this.bb_pos, 12);
        return n
          ? (t || new e.keyframes.Layer()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Scene.prototype.progressMarkers = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 14);
        return r
          ? (n || new e.keyframes.ProgressMarker()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Scene.prototype.progressMarkersLength = function () {
        var e = this.bb.__offset(this.bb_pos, 14);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Scene.startScene = function (e) {
        e.startObject(6);
      }),
      (e.keyframes.Scene.addId = function (e, t) {
        e.addFieldInt32(0, t, 0);
      }),
      (e.keyframes.Scene.addSize = function (e, t) {
        e.addFieldStruct(1, t, 0);
      }),
      (e.keyframes.Scene.addFrameRate = function (e, t) {
        e.addFieldFloat32(2, t, 0);
      }),
      (e.keyframes.Scene.addDuration = function (e, t) {
        e.addFieldFloat32(3, t, 0);
      }),
      (e.keyframes.Scene.addRootLayer = function (e, t) {
        e.addFieldOffset(4, t, 0);
      }),
      (e.keyframes.Scene.addProgressMarkers = function (e, t) {
        e.addFieldOffset(5, t, 0);
      }),
      (e.keyframes.Scene.createProgressMarkersVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Scene.startProgressMarkersVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Scene.endScene = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Scene.createScene = function (t, n, r, o, a, i, l) {
        return (
          e.keyframes.Scene.startScene(t),
          e.keyframes.Scene.addId(t, n),
          e.keyframes.Scene.addSize(t, r),
          e.keyframes.Scene.addFrameRate(t, o),
          e.keyframes.Scene.addDuration(t, a),
          e.keyframes.Scene.addRootLayer(t, i),
          e.keyframes.Scene.addProgressMarkers(t, l),
          e.keyframes.Scene.endScene(t)
        );
      }),
      (e.keyframes.Assets = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Assets.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Assets.getRootAsAssets = function (t, n) {
        return (n || new e.keyframes.Assets()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Assets.prototype.bitmaps = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 4);
        return r
          ? (n || new e.keyframes.Bitmap()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Assets.prototype.bitmapsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Assets.prototype.audio = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 6);
        return r
          ? (n || new e.keyframes.Audio()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Assets.prototype.audioLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Assets.prototype.video = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 8);
        return r
          ? (n || new e.keyframes.Video()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Assets.prototype.videoLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Assets.prototype.fonts = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 10);
        return r
          ? (n || new e.keyframes.Font()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Assets.prototype.fontsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Assets.startAssets = function (e) {
        e.startObject(4);
      }),
      (e.keyframes.Assets.addBitmaps = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.Assets.createBitmapsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Assets.startBitmapsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Assets.addAudio = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.Assets.createAudioVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Assets.startAudioVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Assets.addVideo = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.Assets.createVideoVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Assets.startVideoVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Assets.addFonts = function (e, t) {
        e.addFieldOffset(3, t, 0);
      }),
      (e.keyframes.Assets.createFontsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Assets.startFontsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Assets.endAssets = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Assets.createAssets = function (t, n, r, o, a) {
        return (
          e.keyframes.Assets.startAssets(t),
          e.keyframes.Assets.addBitmaps(t, n),
          e.keyframes.Assets.addAudio(t, r),
          e.keyframes.Assets.addVideo(t, o),
          e.keyframes.Assets.addFonts(t, a),
          e.keyframes.Assets.endAssets(t)
        );
      }),
      (e.keyframes.Variable = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Variable.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Variable.getRootAsVariable = function (t, n) {
        return (n || new e.keyframes.Variable()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Variable.prototype.name = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.__string(this.bb_pos + t, e) : null;
      }),
      (e.keyframes.Variable.prototype.layerIds = function (e) {
        var t = this.bb.__offset(this.bb_pos, 6);
        return t
          ? this.bb.readInt32(this.bb.__vector(this.bb_pos + t) + e * 4)
          : 0;
      }),
      (e.keyframes.Variable.prototype.layerIdsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Variable.prototype.layerIdsArray = function () {
        var e = this.bb.__offset(this.bb_pos, 6);
        return e
          ? new Int32Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Variable.prototype.fields = function (e) {
        var t = this.bb.__offset(this.bb_pos, 8);
        return t ? this.bb.readUint8(this.bb.__vector(this.bb_pos + t) + e) : 0;
      }),
      (e.keyframes.Variable.prototype.fieldsLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Variable.prototype.fieldsArray = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e
          ? new Uint8Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Variable.startVariable = function (e) {
        e.startObject(3);
      }),
      (e.keyframes.Variable.addName = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.Variable.addLayerIds = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.Variable.createLayerIdsVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addInt32(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Variable.startLayerIdsVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Variable.addFields = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.Variable.createFieldsVector = function (e, t) {
        e.startVector(1, t.length, 1);
        for (var n = t.length - 1; n >= 0; n--) e.addInt8(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Variable.startFieldsVector = function (e, t) {
        e.startVector(1, t, 1);
      }),
      (e.keyframes.Variable.endVariable = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Variable.createVariable = function (t, n, r, o) {
        return (
          e.keyframes.Variable.startVariable(t),
          e.keyframes.Variable.addName(t, n),
          e.keyframes.Variable.addLayerIds(t, r),
          e.keyframes.Variable.addFields(t, o),
          e.keyframes.Variable.endVariable(t)
        );
      }),
      (e.keyframes.Document = function () {
        ((this.bb = null), (this.bb_pos = 0));
      }),
      (e.keyframes.Document.prototype.__init = function (e, t) {
        return ((this.bb_pos = e), (this.bb = t), this);
      }),
      (e.keyframes.Document.getRootAsDocument = function (t, n) {
        return (n || new e.keyframes.Document()).__init(
          t.readInt32(t.position()) + t.position(),
          t,
        );
      }),
      (e.keyframes.Document.bufferHasIdentifier = function (e) {
        return e.__has_identifier("KYF3");
      }),
      (e.keyframes.Document.prototype.manifest = function (e) {
        var t = this.bb.__offset(this.bb_pos, 4);
        return t ? this.bb.readUint8(this.bb.__vector(this.bb_pos + t) + e) : 0;
      }),
      (e.keyframes.Document.prototype.manifestLength = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Document.prototype.manifestArray = function () {
        var e = this.bb.__offset(this.bb_pos, 4);
        return e
          ? new Uint8Array(
              this.bb.bytes().buffer,
              this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
              this.bb.__vector_len(this.bb_pos + e),
            )
          : null;
      }),
      (e.keyframes.Document.prototype.assets = function (t) {
        var n = this.bb.__offset(this.bb_pos, 6);
        return n
          ? (t || new e.keyframes.Assets()).__init(
              this.bb.__indirect(this.bb_pos + n),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Document.prototype.scenes = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 8);
        return r
          ? (n || new e.keyframes.Scene()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Document.prototype.scenesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 8);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Document.prototype.defaultScene = function () {
        var e = this.bb.__offset(this.bb_pos, 10);
        return e ? this.bb.readInt32(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Document.prototype.variables = function (t, n) {
        var r = this.bb.__offset(this.bb_pos, 12);
        return r
          ? (n || new e.keyframes.Variable()).__init(
              this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4),
              this.bb,
            )
          : null;
      }),
      (e.keyframes.Document.prototype.variablesLength = function () {
        var e = this.bb.__offset(this.bb_pos, 12);
        return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
      }),
      (e.keyframes.Document.startDocument = function (e) {
        e.startObject(5);
      }),
      (e.keyframes.Document.addManifest = function (e, t) {
        e.addFieldOffset(0, t, 0);
      }),
      (e.keyframes.Document.createManifestVector = function (e, t) {
        e.startVector(1, t.length, 1);
        for (var n = t.length - 1; n >= 0; n--) e.addInt8(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Document.startManifestVector = function (e, t) {
        e.startVector(1, t, 1);
      }),
      (e.keyframes.Document.addAssets = function (e, t) {
        e.addFieldOffset(1, t, 0);
      }),
      (e.keyframes.Document.addScenes = function (e, t) {
        e.addFieldOffset(2, t, 0);
      }),
      (e.keyframes.Document.createScenesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Document.startScenesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Document.addDefaultScene = function (e, t) {
        e.addFieldInt32(3, t, 0);
      }),
      (e.keyframes.Document.addVariables = function (e, t) {
        e.addFieldOffset(4, t, 0);
      }),
      (e.keyframes.Document.createVariablesVector = function (e, t) {
        e.startVector(4, t.length, 4);
        for (var n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
        return e.endVector();
      }),
      (e.keyframes.Document.startVariablesVector = function (e, t) {
        e.startVector(4, t, 4);
      }),
      (e.keyframes.Document.endDocument = function (e) {
        var t = e.endObject();
        return t;
      }),
      (e.keyframes.Document.finishDocumentBuffer = function (e, t) {
        e.finish(t, "KYF3");
      }),
      (e.keyframes.Document.createDocument = function (t, n, r, o, a, i) {
        return (
          e.keyframes.Document.startDocument(t),
          e.keyframes.Document.addManifest(t, n),
          e.keyframes.Document.addAssets(t, r),
          e.keyframes.Document.addScenes(t, o),
          e.keyframes.Document.addDefaultScene(t, a),
          e.keyframes.Document.addVariables(t, i),
          e.keyframes.Document.endDocument(t)
        );
      }));
    var l = e.keyframes;
    i.default = l;
  },
  66,
);
