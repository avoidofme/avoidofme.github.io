---
title: "Setting up environment"
pubDate: "2026-10-04"
description: "Setting up my usual environment."
---

In this post I wanna talk about my setup, my setup is very minimal as I just use default configuration.

# Operating System

So for OS I use Linux, back when I first got my laptop, I always want to install this. My first Linux distro was [Arch Linux](https://archlinux.org), took me half day to install while watching tutorial. After that i kinda hopping between distros, but I can conclude I stay on [Arch Linux](https://archlinux.org) the longest, but I also liked [Void Linux](https://voidlinux.org/) for it's minimalism and it's init system. Just recently I decided to start using usable distros, like [Fedora Linux](https://fedoraproject.org/). So right now i use Fedora for daily driver, but i still have [Arch Linux](https://archlinux.org), will explain later. For Fedora installation itself, when I first trying to install it I wanna install minimal Fedora, i think i downloaded Fedora everything ISO, then boot it. Seems like it have GUI installer, I was like "huh, okay...", then I switch to another tty, after somewhile I realized I can't even use dnf command even tho I already use fdisk to setup the partition.

Since it does not work, I boot back to my Arch Linux, pull Fedora docker image and run it, mount preserved partitions, then finally I can use dnf command to bootstrap minimal Fedora. After that i just chroot inside and install necessities like kernel, well something like that.

# Terminal

I have been using fish for a long time, I was like "I just want it to work without me configuring". It provides completions, autosuggestions, and more right out of the box. I use nano for root text editor as i don't want config files to be generated, but for my own user I use [neovim](https://neovim.io/) with [LazyVim](https://www.lazyvim.org/).

# GUI

For GUI I use window manager, I am on X with i3wm, the only things i change was adding keybinds. More tool to support it was dunst for notification, rofi for run, maim for screenshot, kitty for terminal, and feh for wallpaper.

# Development

> Language

For programming language I use Python, and Go mainly, but not limited to since I do other things and I just use whatever best suited. For example like web development, I use Nuxt or Vue and Tailwind CSS but maybe also Astro. For CLI tool I use Python or Go. Python for faster development and Go for better performance. For system level I like C or Zig.

> IDE

Well earlier i already said I use neovim but I also have Antigravity standalone IDE, which I use more often lately.

> Tools

I use Git for version control, I use Git for everything. I use Git for everything. I use Git for everything. I use Git for everything. I use Git for everything. I use Git for everything. I use Git for everything. I use Git for everything. I use Git for everything. I use Git for everything. I use Git for everything.

I use Docker for containerization, Docker for containerization. Docker for containerization. Docker for containerization. Docker for containerization. Docker for containerization. Docker for containerization. Docker for containerization. Docker for containerization. Docker for containerization. Docker for containerization. Docker for containerization. Docker for containerization. Docker for containerization. Docker for containerization. Docker for containerization.

I use Ansible for automation.

I use [Incus](https://linuxcontainers.org/incus/) for containerization.

I use Qemu for virtualization.

I use zoxide for better cd, rg for better grep, fd for better find, bat for better cat.

I use nmap, metasploit, sqlmap, burpsuite, zaproxy, wireshark, john, ghidra

I like version manager, for python i use uv, fnm for node, and other else mise.

```python
# i lied

def main():
    print("I lied")

if __name__ == "__main__":
    main()
```

`booho`