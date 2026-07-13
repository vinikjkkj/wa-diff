__d(
  "WAWebWindowsHybridBridge.v2584",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2584",
    "WAWebWindowsHybridBridgeAbProps.v2584",
    "WAWebWindowsHybridBridgeAdv.v2584",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2584",
    "WAWebWindowsHybridBridgeConnection.v2584",
    "WAWebWindowsHybridBridgeContacts.v2584",
    "WAWebWindowsHybridBridgeDebugFeatures.v2584",
    "WAWebWindowsHybridBridgeLinksPreview.v2584",
    "WAWebWindowsHybridBridgeMediaFiles.v2584",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2584",
    "WAWebWindowsHybridBridgeNativeAppState.v2584",
    "WAWebWindowsHybridBridgePictures.v2584",
    "WAWebWindowsHybridBridgePreferences.v2584",
    "WAWebWindowsHybridBridgeRateTheApp.v2584",
    "WAWebWindowsHybridBridgeScalingControl.v2584",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2584",
    "WAWebWindowsHybridBridgeSharesheet.v2584",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2584",
    "WAWebWindowsHybridBridgeTouchpadFix.v2584",
    "WAWebWindowsHybridBridgeVoip.v2584",
    "WAWebWindowsHybridBridgeWam.v2584",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((this.serverEncKeySaltBridge = null),
          (e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2584",
          ).WindowsHybridBridgeAbProps_v2584)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2584",
          ).WindowsHybridBridgeWam_v2584)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2584",
          ).WindowsHybridBridgePreferences_v2584)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2584",
          ).WindowsHybridBridgeScalingControl_v2584)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2584",
          ).WindowsHybridBridgePictures_v2584)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2584",
            ).WindowsHybridBridgeDebugFeatures_v2584)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2584",
          ).VoipWinRTBridge_v2584)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2584",
          ).WAWebWindowsHybridBridgeRateTheApp_v2584)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2584",
          ).WindowsHybridBridgeConnection_v2584)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2584",
          ).WindowsHybridBridgeTouchpadFix_v2584)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2584",
          ).WindowsHybridBridgeLinksPreview_v2584)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2584",
            ).WindowsHybridBridgeContacts_v2584)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2584",
            ).WindowsHybridBridgeContacts_v2584)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2584",
          ).WAWebWindowsHybridBridgeMediaFiles_v2584)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2584",
          ).WAWebWindowsHybridBridgeSharesheet_v2584)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2584",
          ).WindowsHybridAppActivationBridge_v2584)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2584",
          ).WindowsHybridBridgeNativeAppState_v2584)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2584",
          ).WindowsHybridBridgeSystemIntegrations_v2584)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2584",
          ).WindowsHybridBridgeBrowserExtensions_v2584)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2584",
          ).WindowsHybridBridgeSeamlessMigration_v2584)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2584",
          ).WindowsHybridBridgeMediaTranscoder_v2584)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2584",
          ).WindowsHybridBridgeAdv_v2584)(e.hostObjects.AdvBridge)),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2584 = e;
  },
  98,
);
