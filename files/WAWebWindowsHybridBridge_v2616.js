__d(
  "WAWebWindowsHybridBridge.v2616",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2616",
    "WAWebWindowsHybridBridgeAbProps.v2616",
    "WAWebWindowsHybridBridgeAdv.v2616",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2616",
    "WAWebWindowsHybridBridgeConnection.v2616",
    "WAWebWindowsHybridBridgeContacts.v2616",
    "WAWebWindowsHybridBridgeDebugFeatures.v2616",
    "WAWebWindowsHybridBridgeLinksPreview.v2616",
    "WAWebWindowsHybridBridgeMediaFiles.v2616",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2616",
    "WAWebWindowsHybridBridgeNativeAppState.v2616",
    "WAWebWindowsHybridBridgePictures.v2616",
    "WAWebWindowsHybridBridgePreferences.v2616",
    "WAWebWindowsHybridBridgeRateTheApp.v2616",
    "WAWebWindowsHybridBridgeRingtone.v2616",
    "WAWebWindowsHybridBridgeScalingControl.v2616",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2616",
    "WAWebWindowsHybridBridgeSharesheet.v2616",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2616",
    "WAWebWindowsHybridBridgeTouchpadFix.v2616",
    "WAWebWindowsHybridBridgeVoip.v2616",
    "WAWebWindowsHybridBridgeWam.v2616",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2616",
          ).WindowsHybridBridgeAbProps_v2616)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2616",
          ).WindowsHybridBridgeWam_v2616)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2616",
          ).WindowsHybridBridgePreferences_v2616)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2616",
          ).WindowsHybridBridgeScalingControl_v2616)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2616",
          ).WindowsHybridBridgePictures_v2616)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2616",
            ).WindowsHybridBridgeDebugFeatures_v2616)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2616",
          ).VoipWinRTBridge_v2616)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2616",
          ).WAWebWindowsHybridBridgeRateTheApp_v2616)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2616",
          ).WindowsHybridBridgeConnection_v2616)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2616",
          ).WindowsHybridBridgeTouchpadFix_v2616)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2616",
          ).WindowsHybridBridgeLinksPreview_v2616)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2616",
            ).WindowsHybridBridgeContacts_v2616)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2616",
            ).WindowsHybridBridgeContacts_v2616)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2616",
          ).WAWebWindowsHybridBridgeMediaFiles_v2616)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2616",
          ).WAWebWindowsHybridBridgeSharesheet_v2616)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2616",
          ).WindowsHybridAppActivationBridge_v2616)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2616",
          ).WindowsHybridBridgeNativeAppState_v2616)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2616",
          ).WindowsHybridBridgeSystemIntegrations_v2616)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2616",
          ).WindowsHybridBridgeBrowserExtensions_v2616)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2616",
          ).WindowsHybridBridgeSeamlessMigration_v2616)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2616",
          ).WindowsHybridBridgeMediaTranscoder_v2616)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2616",
          ).WindowsHybridBridgeAdv_v2616)(e.hostObjects.AdvBridge)));
        var E = e.hostObjects.RingtoneBridge;
        (E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2616",
          ).WindowsHybridBridgeRingtone_v2616)(E)),
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
    l.WindowsHybridBridge_v2616 = e;
  },
  98,
);
