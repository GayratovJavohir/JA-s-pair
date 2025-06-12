from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect

from insta_clone.forms import RegistrationForm, LoginForm


def registration_view(request):
    if request.method == 'POST':
        form = RegistrationForm(request.data)

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
