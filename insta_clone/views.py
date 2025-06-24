from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

from insta_clone.forms import RegistrationForm, LoginForm, UserUpdateForm


def registration_view(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)

        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect(":list")

    else:
        form = RegistrationForm(request.data)

    return render(request, 'index.html', {"form": form})


def login_view(request):
    if request.method == "POST":
        form = LoginForm(data=request.POST)

        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            user = authenticate(request, username=username, password=password)

            if user:
                login(request, user)
                return redirect(":list")

    else:
        form = LoginForm(data=request.POST)

    return render(request, 'index.html', {"form": form})


@login_required
def profile_view(request):
    if request.method == "POST":
        form = UserUpdateForm(request.POST, request.FILES, instance=request.user)

        if form.is_valid():
            form.save()
            return redirect(":profile")

    else:
        form = UserUpdateForm(instance=request.user)

    return render(request, 'index.html', {"user": request.user, "form": form})

