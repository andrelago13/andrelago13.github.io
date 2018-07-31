---
layout: blogpost
---

#### [Home](/) | [Projects](/projects) | [Blog](/blog)

# My work at Google

### Tags: Work Experience
### [<- Previous post](/blog/applying-for-google) | [Next post ->](/blog/tales-of-a-ceo)

![California](/assets/images/california.png)

It’s been a few months since my internship at Google ended, and I’ve been waiting to write about what exactly I did there. This happened because I am under a confidentiality agreement, which prevents me from talking about confidential things I worked on before they get released to the public.

Recently however, Google released the [Android O developer preview](https://developer.android.com/preview/index.html), which brought to public some cool Android O features, including one of my internship sub-projects – **add Android custom ringtones from audio files** ([press coverage](http://www.androidpolice.com/2017/03/23/android-o-feature-spotlight-easily-add-custom-ringtones-alarm-sounds-notification-sounds/)).

As you might know, on the stock Android version there were only 2 ways for you to add a custom ringtone – use a 3rd party app or place an audio file in a specific folder of the device (and in some cases, reboot the device). This was a pain point for a lot of users, and something that should have been made simpler a while ago.

After I finished my main internship project (which is still confidential), I was given the task of making it easier to add custom ringtones on Android, which I enjoyed a lot since it is a very “visible” feature, and one that will probably be used for all Android O+ users.

## The feature

From Android O, you will be able to simply add custom ringtones from any audio file that is in anywhere in the device (yes, even without rebooting!).

If you go to the Sounds section in the Settings app, and open the ringtone picker (by tapping any of the ringtone settings), you will notice something different at the bottom as there will be a “Add new ringtone” option. By tapping that, you will be shown the Android file browser, through which you can browse the device storage for any audio files, and choose your best custom ringtone. After doing that, the custom ringtone becomes available in the ringtone list, and you can even delete the original file without losing your precious ringtone 🙂

## How it works

The internal processing behind this feature is quite simple (although maybe not as simple as you may think).

When you select a file in the picker, the system copies it to the ringtone directory in the storage, and directly adds it to the ringtone database without requiring the device to reboot.

Although this seems simple, there are a few issues related to this feature that might not be so obvious. The main concern always has to be security when something is done in the most used mobile operating system in the world, as nothing should be vulnerable to attacks or exploits. This means that developing features like this always requires special attention from the developer. In this case, the user must not be able to access files that it shouldn’t access, e.g. in [Android for Work](https://www.android.com/work/) profiles the user can’t access files that belong to the work profile.

## Development challenges

The main challenge was to be aware of the security issues that I mentioned above. Paying attention to possible security flaws was something that I was not really used to do, so that meant I had to try my best at focusing on it. All Android code is available for free around the world, so anything can be used for hacks and exploits, and as an Android developer that is something you really need to look out for.

Another interesting aspect was the fact that this feature required some UI work. Although it is a small feature with nearly no impact on UI, I had to talk to several different people because of aspects that are really important for user experience that I didn’t really focus on before (e.g. what is the simplest way for users to actually use this feature, or what is the best text to shortly explain this feature). This was not really a challenge, rather an interesting way to make things that I was also not used to.

## Conclusion

Overall I really enjoyed working on this feature, and I was really lucky to have such an interesting project as an intern, a project that I can show people how to use, and a feature that eventually may be used by thousands or millions of people world-wide.

Stay tuned to learn about the other features I developed during the internship 🙂